import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[STRIPE-WEBHOOK] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Webhooks are server-to-server; no CORS needed
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    if (!stripeKey || !webhookSecret) {
      console.error("[STRIPE-WEBHOOK] Missing required secrets");
      return new Response(JSON.stringify({ error: "Service configuration error" }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }

    const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    logStep("Event received", { type: event.type, id: event.id });

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      logStep("Checkout session completed", {
        sessionId: session.id,
        paymentStatus: session.payment_status,
      });

      if (session.payment_status === "paid") {
        const { error } = await supabaseAdmin.from("payments").upsert(
          {
            stripe_session_id: session.id,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            customer_email: session.customer_details?.email || session.customer_email,
            amount_total: session.amount_total,
            currency: session.currency,
            payment_status: session.payment_status,
            status: "completed",
          },
          { onConflict: "stripe_session_id" }
        );

        if (error) {
          logStep("ERROR inserting payment", { error: error.message });
          throw error;
        }
        logStep("Payment recorded successfully");
      }
    }

    if (event.type === "checkout.session.async_payment_succeeded") {
      const session = event.data.object as Stripe.Checkout.Session;
      const { error } = await supabaseAdmin.from("payments").upsert(
        {
          stripe_session_id: session.id,
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          customer_email: session.customer_details?.email || session.customer_email,
          amount_total: session.amount_total,
          currency: session.currency,
          payment_status: "paid",
          status: "completed",
        },
        { onConflict: "stripe_session_id" }
      );
      if (error) logStep("ERROR updating payment", { error: error.message });
    }

    if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const { error } = await supabaseAdmin.from("payments").upsert(
        {
          stripe_session_id: session.id,
          customer_email: session.customer_details?.email || session.customer_email,
          amount_total: session.amount_total,
          currency: session.currency,
          payment_status: "failed",
          status: "failed",
        },
        { onConflict: "stripe_session_id" }
      );
      if (error) logStep("ERROR recording failed payment", { error: error.message });
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("[STRIPE-WEBHOOK] Error:", error);
    return new Response(JSON.stringify({ error: "Webhook processing failed" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});

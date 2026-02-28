import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const allowedOrigins = [
  "https://training-superstar-academy.lovable.app",
  "https://id-preview--5b67f0ab-ecfb-4e34-9263-d54007d0434e.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  return {
    "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      console.error("[VERIFY-SESSION] STRIPE_SECRET_KEY is not set");
      return new Response(JSON.stringify({ error: "Service temporarily unavailable", verified: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    const body = await req.json();
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";

    // Validate sessionId format
    if (!sessionId || !/^cs_(test_|live_)[a-zA-Z0-9]{10,}$/.test(sessionId)) {
      return new Response(JSON.stringify({ error: "Invalid request", verified: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return new Response(
      JSON.stringify({
        verified: session.payment_status === "paid",
        paymentStatus: session.payment_status,
        customerEmail: session.customer_details?.email || session.customer_email,
        amountTotal: session.amount_total,
        currency: session.currency,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("[VERIFY-SESSION] Error:", error);
    return new Response(JSON.stringify({ error: "An error occurred. Please try again later.", verified: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

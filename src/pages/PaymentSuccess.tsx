import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2, Home } from "lucide-react";

type VerificationState = "loading" | "verified" | "failed";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [state, setState] = useState<VerificationState>("loading");
  const [details, setDetails] = useState<{
    customerEmail?: string;
    amountTotal?: number;
    currency?: string;
  }>({});

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setState("failed");
      return;
    }

    const verify = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("verify-session", {
          body: { sessionId },
        });
        if (error) throw error;
        if (data?.verified) {
          setState("verified");
          setDetails({
            customerEmail: data.customerEmail,
            amountTotal: data.amountTotal,
            currency: data.currency,
          });
        } else {
          setState("failed");
        }
      } catch {
        setState("failed");
      }
    };

    verify();
  }, [searchParams]);

  const formatAmount = (amount?: number, currency?: string) => {
    if (!amount || !currency) return null;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-slide-up">
        {state === "loading" && (
          <div className="space-y-6">
            <Loader2 className="w-16 h-16 text-primary mx-auto animate-spin" />
            <h1 className="text-2xl font-display font-bold">Verifying your payment...</h1>
            <p className="text-muted-foreground">Please wait while we confirm your transaction.</p>
          </div>
        )}

        {state === "verified" && (
          <div className="space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold">Payment Confirmed!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your purchase. A confirmation receipt has been sent to your email.
            </p>
            {details.amountTotal && (
              <div className="bg-gradient-card border border-border rounded-xl p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="text-2xl font-display font-bold text-gradient">
                  {formatAmount(details.amountTotal, details.currency)}
                </p>
                {details.customerEmail && (
                  <>
                    <p className="text-sm text-muted-foreground mt-4">Receipt sent to</p>
                    <p className="text-foreground font-medium">{details.customerEmail}</p>
                  </>
                )}
              </div>
            )}
            <Button variant="hero" size="lg" onClick={() => navigate("/")} className="mt-4">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        )}

        {state === "failed" && (
          <div className="space-y-6">
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <XCircle className="w-12 h-12 text-destructive" />
            </div>
            <h1 className="text-3xl font-display font-bold">Payment Not Verified</h1>
            <p className="text-muted-foreground text-lg">
              We couldn't verify your payment. If you believe this is an error, please contact support.
            </p>
            <Button variant="hero" size="lg" onClick={() => navigate("/")} className="mt-4">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;

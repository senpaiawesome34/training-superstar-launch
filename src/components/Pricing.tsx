import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { STRIPE_PRICES, TierKey } from "@/lib/stripe";
import { useToast } from "@/hooks/use-toast";
const tiers: { name: string; price: number; description: string; features: string[]; popular: boolean; tierKey: TierKey }[] = [
  {
    name: "Hobbyjogger",
    price: 49,
    description: "Perfect for beginners looking to build a consistent running habit and improve basic fitness.",
    features: [
      "1 group session per week",
      "Running form analysis",
      "Tailored Coaching Plan",
      "Structured Training Program",
      "Community Telegram Channel",
    ],
    popular: false,
    tierKey: "hobbyjogger",
  },
  {
    name: "Advanced Hobbyjogger",
    price: 89,
    description: "For runners ready to level up their game with structured training and personalized guidance.",
    features: [
      "3 group sessions per week",
      "Monthly 1-on-1 coaching call",
      "Personalized training plan",
      "Running form analysis",
      "Nutrition basics guide",
      "Priority booking for sessions",
    ],
    popular: true,
    tierKey: "advancedHobbyjogger",
  },
  {
    name: "Going for Gold",
    price: 149,
    description: "Elite-level coaching for those serious about smashing their IPPT or achieving peak performance.",
    features: [
      "Unlimited group sessions",
      "Weekly 1-on-1 coaching",
      "Custom periodized program",
      "Advanced performance tracking",
      "Strength & Conditioning sessions",
      "Direct coach messaging",
      "Competition prep support",
    ],
    popular: false,
    tierKey: "goingForGold",
  },
];

const Pricing = () => {
  const [loadingTier, setLoadingTier] = useState<TierKey | null>(null);
  const { toast } = useToast();

  const handleSubscribe = async (tierKey: TierKey) => {
    setLoadingTier(tierKey);
    try {
      const priceId = STRIPE_PRICES[tierKey].priceId;
      
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId },
      });

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: "Unable to start checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Choose Your{" "}
            <span className="text-gradient">Path to Speed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible plans designed to match your commitment level and goals. All plans include access to our state-of-the-art training facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group bg-gradient-card rounded-2xl p-8 border transition-all duration-500 hover:shadow-glow ${
                tier.popular
                  ? "border-primary md:-translate-y-4 shadow-glow"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-hero text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-xl font-display font-bold mb-2">{tier.name}</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-display font-bold text-gradient">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={tier.popular ? "hero" : "heroOutline"}
                className="w-full"
                onClick={() => handleSubscribe(tier.tierKey)}
                disabled={loadingTier !== null}
              >
                {loadingTier === tier.tierKey ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          All plans are month-to-month. No long-term contracts. Cancel anytime.
        </p>

        {/* School Championship Package */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border hover:border-primary/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  For Schools
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">
                  School Championship Package
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive training programs designed for schools looking to elevate their track & field and/or cross country teams. Custom packages available for primary, secondary, pre-tertiary & tertiary levels.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Team Training Sessions",
                    "Competition Preparation",
                    "Mental Conditioning",
                    "Performance Analysis",
                    "Technical Expertise",
                    "Event-Day Support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="text-center md:text-right">
                  <div className="text-3xl font-display font-bold text-gradient">Custom Pricing</div>
                </div>
                <Button variant="hero" size="lg">
                  Contact Us
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

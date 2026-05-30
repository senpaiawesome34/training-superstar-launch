import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopPromo = () => {
  const navigate = useNavigate();

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-background to-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Icon / Visual */}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Check Out Our{" "}
                <span className="text-gradient">Products</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl">
                From training gear to exclusive TSA merchandise — everything you need to train like a superstar.
              </p>
            </div>

            {/* CTA */}
            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/shop")}
              className="flex-shrink-0"
            >
              Visit the Shop
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPromo;

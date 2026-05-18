import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Placeholder products — replace name, price, and image as they become available
const products = [
  { id: 1, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 2, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 3, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 4, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 5, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 6, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
];

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Button>

        <header className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            TSA Shop
          </h1>
          <p className="text-muted-foreground text-lg">
            Gear up with official TSA merchandise. New drops coming soon.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-glow transition-all duration-300">
              <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                <ShoppingBag size={48} className="opacity-40" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <Button size="sm" variant="outline" disabled>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Have a product suggestion? Reach out via the{" "}
          <a href="/#contact" className="text-primary hover:underline">
            contact section
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import socks1 from "@/assets/socks-1.jpg";
import socks2 from "@/assets/socks-2.jpg";
import bodyAnalysis1 from "@/assets/body-analysis-1.jpg.asset.json";
import bodyAnalysis2 from "@/assets/body-analysis-2.jpg.asset.json";
import bodyAnalysis3 from "@/assets/body-analysis-3.jpg.asset.json";

type Product = {
  id: number;
  name: string;
  price: string;
  clientPrice?: string;
  description: string;
  images?: string[];
  orderUrl?: string;
};

const SOCKS_ORDER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3zPnC1ydf_pwWLKfbcNVHo1jbtKGr9i-l76gYrYw_R6e-9Q/viewform";

// Products — replace name, price, and image as they become available
const products: Product[] = [
  {
    id: 1,
    name: "Crew Socks",
    price: "$3.00 / pair",
    clientPrice: "$2.80 for TSA Clients (verification required)",
    description:
      "Light, economical and durable crew socks featuring bold brands. Made in Korea. One size fits most.",
    images: [socks1, socks2],
    orderUrl: SOCKS_ORDER_FORM_URL,
  },
  { id: 2, name: "Full Body Analysis", price: "$150 one-time", description: "Product description coming soon." },

  { id: 3, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 4, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 5, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
  { id: 6, name: "Coming Soon", price: "TBA", description: "Product description coming soon." },
];

const ProductImage = ({ images, name }: { images?: string[]; name: string }) => {
  const [idx, setIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
        <ShoppingBag size={48} className="opacity-40" />
      </div>
    );
  }

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative aspect-square bg-muted overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} - image ${i + 1}`}
            className="h-full w-full flex-shrink-0 object-cover"
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md transition"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === idx ? "bg-primary" : "bg-background/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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
              <ProductImage images={product.images} name={product.name} />
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold">{product.price}</span>
                    {product.clientPrice && (
                      <span className="text-xs text-muted-foreground">{product.clientPrice}</span>
                    )}
                  </div>
                  {product.orderUrl ? (
                    <Button size="sm" variant="hero" asChild>
                      <a
                        href={product.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${product.name} via form`}
                      >
                        Add to Cart
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      Add to Cart
                    </Button>
                  )}
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
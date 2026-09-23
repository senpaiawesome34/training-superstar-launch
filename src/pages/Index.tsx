import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";
import HallOfFame from "@/components/HallOfFame";
import ShopPromo from "@/components/ShopPromo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <Pricing />
      <WhyUs />
      <OurStory />
      <Testimonials />
      <HallOfFame />
      <ShopPromo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;


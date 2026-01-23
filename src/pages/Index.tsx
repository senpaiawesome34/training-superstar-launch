import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

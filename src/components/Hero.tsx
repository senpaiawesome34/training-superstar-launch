import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-runner.jpg";
import worldAthleticsLogo from "@/assets/world-athletics-logo.png";
import sportsgLogo from "@/assets/sportsg-logo.webp";
import { ArrowRight, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Runner on track"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Singapore's #1 IPPT Training Academy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-slide-up animation-delay-200">
            Become the{" "}
            <span className="text-gradient">Fastest Version</span>{" "}
            of Yourself
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up animation-delay-400">
            Whether you're preparing for IPPT, chasing a personal best, or just want to run faster — our proven training methods turn everyday runners into superstars.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-600">
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/10 overflow-hidden">
                <img src={worldAthleticsLogo} alt="World Athletics" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-xl font-display font-bold text-foreground">World Athletics</div>
              <div className="text-xs text-muted-foreground">Recognised</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-lg bg-white overflow-hidden">
                <img src={sportsgLogo} alt="Sport Singapore" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-xl font-display font-bold text-foreground">SportSG</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/10">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className="text-xl font-display font-bold text-foreground">Gold</div>
              <div className="text-xs text-muted-foreground">Standard</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

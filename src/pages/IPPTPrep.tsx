import { Button } from "@/components/ui/button";
import { ArrowLeft, Medal, Clock, Target, TrendingUp, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ipptHero from "@/assets/ippt-hero.png";

const weeklySchedule = [
  { day: "Mon", focus: "Speed Work", description: "Interval training & sprint drills" },
  { day: "Wed", focus: "High Aerobic Conditioning", description: "Tempo runs & 2.4km pacing" },
  { day: "Thurs", focus: "Strength", description: "Push-ups, sit-ups & core conditioning" },
  { day: "Sat", focus: "Endurance Run", description: "Comfortable runs to strengthen the base" },
];

const phases = [
  {
    title: "Phase 1: Foundation (Weeks 1-3)",
    description: "Build your aerobic base and establish proper form for push-ups, sit-ups, and running.",
    highlights: ["Running form correction", "Bodyweight strength baseline", "Flexibility & mobility"],
  },
  {
    title: "Phase 2: Build (Weeks 4-7)",
    description: "Progressive overload across all three stations with targeted interval training.",
    highlights: ["2.4km pace training", "Push-up volume building", "Sit-up endurance sets"],
  },
  {
    title: "Phase 3: Peak (Weeks 8-10)",
    description: "Fine-tune performance with race-pace efforts and full mock IPPT sessions.",
    highlights: ["Race Day Simulation", "Mental conditioning", "Taper & recovery strategy"],
  },
  {
    title: "Phase 4: Test Ready (Weeks 11-12)",
    description: "Strategic tapering and confidence-building leading into your actual IPPT.",
    highlights: ["Last minute sharpening", "Nutrition & sleep optimisation", "Day-of strategy planning"],
  },
];

const IPPTPrep = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Medal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Most Popular Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              IPPT <span className="text-gradient">Prep Program</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              A structured 8-12 week program designed specifically to help you ace your IPPT with flying colors. From push-ups to your 2.4km run, we've got every station covered.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>8-12 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>All Fitness Levels</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Gold Standard Results</span>
              </div>
            </div>

            <Button variant="hero" size="xl" asChild>
              <a href="/#pricing">
                Sign Up Now
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
              Your Journey to <span className="text-gradient">Gold</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven 4-phase approach takes the guesswork out of IPPT preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="text-primary font-display font-bold text-sm mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Training Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
              A Typical <span className="text-gradient">Training Week</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {weeklySchedule.map((day) => (
              <div
                key={day.day}
                className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 text-center"
              >
                <div className="text-primary font-display font-bold text-2xl mb-2">{day.day}</div>
                <h4 className="font-display font-bold mb-2">{day.focus}</h4>
                <p className="text-muted-foreground text-sm">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Get Your <span className="text-gradient">Gold</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join hundreds of NSmen who've smashed their IPPT with our proven training system.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="/#pricing">
              View Pricing Plans
              <ChevronRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPPTPrep;

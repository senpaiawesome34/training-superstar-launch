import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock, Target, TrendingUp, CheckCircle, ChevronRight, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const phases = [
  {
    title: "Phase 1: Base & Benchmark (Weeks 1-2)",
    description: "Establish your current fitness with a benchmark time trial, rebuild your aerobic base, and lock in efficient form for the long road ahead.",
    highlights: ["Benchmark time trial", "Aerobic base building", "Running form & stride work"],
  },
  {
    title: "Phase 2: Marathon Build (Weeks 3-5)",
    description: "Progressive long runs and threshold work to raise your ceiling — the engine work that makes race day feel controlled.",
    highlights: ["Progressive long runs", "Tempo & threshold sessions", "Fueling & hydration practice"],
  },
  {
    title: "Phase 3: Clutch Up (Weeks 6-7)",
    description: "The peak phase. Race-pace intervals and marathon-pace simulations sharpen your legs to deliver exactly when it counts.",
    highlights: ["Race-pace intervals", "Marathon-pace simulations", "Mental conditioning"],
  },
  {
    title: "Phase 4: Taper & Race Ready (Week 8)",
    description: "Strategic taper so you arrive fresh, sharp, and ready. We fine-tune pacing strategy, nutrition, and race-day execution.",
    highlights: ["Strategic taper", "Race-day strategy planning", "Final sharpener sessions"],
  },
];

const weeklySchedule = [
  { day: "Tue", focus: "Speed Work", description: "Intervals & track sessions to build turnover" },
  { day: "Thurs", focus: "Tempo & Threshold", description: "Sustained efforts at race-adjacent paces" },
  { day: "Sat", focus: "Long Run", description: "Progressive distance work to build endurance" },
  { day: "Sun", focus: "Recovery & Mobility", description: "Easy running, drills, and injury prevention" },
];

const benefits = [
  "Arrive at the start line genuinely peaked, not just trained",
  "Race-pace confidence built through simulations",
  "Learn fueling and hydration strategy for 42.195km",
  "Structured taper so race day feels easy",
  "Pacing plans tailored to your goal time",
  "Train alongside runners chasing the same race",
];

const EightWeeksToPeak = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Seasonal Program — October–November Only</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              8 Weeks to <span className="text-gradient">Peak</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Our special Clutch Up Program for the BYD Singapore International Marathon. Eight weeks of targeted race build-up that takes committed runners from fit to peaked — sharp, confident, and ready to race.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>Marathon Focus</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Peaked, Not Just Trained</span>
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

      {/* Seasonal intake notice */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4 bg-gradient-card rounded-2xl p-6 border border-primary/30">
            <Flag className="w-8 h-8 text-primary shrink-0" />
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Seasonal intake:</span> 8 Weeks to Peak runs only during October–November, timed so your peak lands exactly on marathon day. Miss the window and you'll have to wait for next year's edition.
            </p>
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
              From Fit to <span className="text-gradient">Peaked</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven 4-phase build that makes the marathon the celebration, not the experiment.
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

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What You'll Gain
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-12">
              Race Day, <span className="text-gradient">Handled</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 bg-gradient-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Clutch Up This <span className="text-gradient">Marathon Season</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Spots are limited to the October–November window. Secure your place and peak at the right time.
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

export default EightWeeksToPeak;

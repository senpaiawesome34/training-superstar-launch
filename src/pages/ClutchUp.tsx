import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Zap,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Flag,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const phases = [
  {
    title: "Phase 1: Baseline & Blueprint",
    description:
      "We establish exactly where you are now, define the target you need to hit, and map the gap between the two.",
    highlights: [
      "Baseline time trial & fitness check",
      "Goal-time gap analysis",
      "Schedule built around your commitments",
    ],
  },
  {
    title: "Phase 2: Targeted Build",
    description:
      "Every single session carries a clear, distinct purpose. No filler volume — only the work that moves your number.",
    highlights: [
      "Running form & pacing correction",
      "Speed and strength development",
      "Delivered trackside or fully remote",
    ],
  },
  {
    title: "Phase 3: The Clutch Up",
    description:
      "The final push. We sharpen your legs and your race plan so the effort you need becomes the effort you can repeat.",
    highlights: [
      "Race-pace & test-pace simulations",
      "Pacing strategy down to the second",
      "Mental conditioning for the crunch",
    ],
  },
  {
    title: "Phase 4: Taper & Deliver",
    description:
      "Arrive fresh, sharp and ready. The plan is executed on the day — not improvised.",
    highlights: [
      "Strategic taper",
      "Day-of execution plan",
      "Final sharpener sessions",
    ],
  },
];

const results = [
  {
    name: "Song Quek",
    role: "NSF, 22",
    window: "1 week",
    outcome: "8:59 → 8:25 on the 2.4km, a perfect 100/100 for IPPT",
    journey: "song-quek",
  },
  {
    name: "Shun Yuan",
    role: "NSman, 23",
    window: "3.5 weeks",
    outcome: "9:54 2.4km and 89/100 Gold — coached entirely remotely",
    journey: "s-y-chu",
  },
  {
    name: "Enzo Lim",
    role: "NSF, 19",
    window: "3 weeks",
    outcome: "8:13 2.4km and a perfect 100/100 on his first attempt",
    journey: "enzo-lim",
  },
  {
    name: "Marc Menon",
    role: "Pre-Enlistee, 19",
    window: "2.5 weeks",
    outcome: "14+ mins down to 11:38 and his first ever IPPT pass",
    journey: "marc-menon",
  },
];

const benefits = [
  "A plan built around your test or race date — not a generic 12-week block",
  "Duration fitted to the time you actually have, as short as a single week",
  "Every session carries a clear, distinct purpose — nothing wasted",
  "Works trackside or fully remote, wherever you happen to be",
  "Designed around NS life: BMT, exercises, coursework and duty rosters",
  "The form and pacing details that shave off the seconds that matter",
];

const ClutchUp = () => {
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Proprietary In-House Program
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Clutch <span className="text-gradient">Up</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              TSA's proprietary in-house program for those who need a last-minute
              push. The clock is already ticking — so we build backwards from your
              date and make every session count.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Up to 8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>Duration Flexible</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Context-Specific</span>
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

      {/* Context notice */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4 bg-gradient-card rounded-2xl p-6 border border-primary/30">
            <Flag className="w-8 h-8 text-primary shrink-0" />
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">
                Context-specific:
              </span>{" "}
              Clutch Up is not a fixed 8-week block. It runs up to 8 weeks and is
              shaped around your test or race date, your starting point and your
              commitments. Tell us your date and we'll tell you honestly what is
              achievable in the window you have.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
              Built <span className="text-gradient">Backwards</span> From Your Date
            </h2>
            <p className="text-muted-foreground text-lg">
              The same four movements every time — compressed or stretched to fit
              the weeks you've actually got.
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
                <h3 className="text-xl font-display font-bold mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {phase.description}
                </p>
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

      {/* Proof */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Proof It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
              Athletes Who <span className="text-gradient">Clutched Up</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from athletes with barely any time on the clock.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {results.map((r) => (
              <Link
                key={r.name}
                to={`/testimonials/${r.journey}`}
                className="group bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-lg">{r.name}</h4>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary shrink-0">
                    <Trophy className="w-3.5 h-3.5" />
                    {r.window}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 mb-4">{r.outcome}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read his full journey
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-12">
              No Time to <span className="text-gradient">Waste</span>
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
            Need a <span className="text-gradient">Last-Minute Push?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us your test or race date and how much time you've got. We'll tell
            you exactly what we can do with it.
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

export default ClutchUp;

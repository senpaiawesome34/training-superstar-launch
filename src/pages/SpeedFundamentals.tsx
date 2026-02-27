import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Clock, Target, TrendingUp, CheckCircle, ChevronRight } from "lucide-react";
import speedHero from "@/assets/speed-fundamentals-hero.jpg";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    title: "Week 1-2: Running Mechanics",
    description: "Learn the fundamentals of efficient running form — posture, foot strike, arm swing, and cadence.",
    highlights: ["Form analysis", "Posture drills", "Cadence optimisation"],
  },
  {
    title: "Week 3-4: Building Speed",
    description: "Introduction to interval training and tempo runs to develop your aerobic and anaerobic capacity.",
    highlights: ["Interval training basics", "Tempo run structure", "Effort levels training"],
  },
  {
    title: "Week 5: Recovery & Flexibility",
    description: "Understand the science of recovery — foam rolling, stretching, sleep, and nutrition for runners.",
    highlights: ["Dynamic warm-ups", "Cool-down routines", "Injury prevention strategies"],
  },
  {
    title: "Week 6: Test & Progress",
    description: "Put it all together with a benchmark run and personalised next-steps plan.",
    highlights: ["Benchmark tests", "Progress review", "Personalised improvement plan"],
  },
];

const benefits = [
  "Improve your running form from day one",
  "Learn pacing strategies for any distance",
  "Build a sustainable training habit",
  "Understand smart training",
  "Reduce the risk of injuries",
  "Join a supportive community of runners",
];

const SpeedFundamentals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={speedHero}
            alt="Sprint training on track"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
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
              <span className="text-sm font-medium text-primary">For Hobby Joggers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Speed <span className="text-gradient">Fundamentals</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Master the basics of running faster. This 6-week program is perfect for hobby joggers looking to improve their pace, refine their form, and build a strong running foundation.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>6 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>Beginners Welcome</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Measurable Progress</span>
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

      {/* Modules */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Course Outline
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
              6 Weeks to <span className="text-gradient">Faster Running</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Each module builds on the last, giving you a complete toolkit for speed improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((mod, index) => (
              <div
                key={mod.title}
                className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="text-primary font-display font-bold text-sm mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{mod.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{mod.description}</p>
                <ul className="space-y-2">
                  {mod.highlights.map((h) => (
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

      {/* Benefits */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What You'll Gain
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-12">
              More Than Just <span className="text-gradient">Speed</span>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Start Running <span className="text-gradient">Smarter</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our next cohort and transform your running in just 6 weeks.
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

export default SpeedFundamentals;

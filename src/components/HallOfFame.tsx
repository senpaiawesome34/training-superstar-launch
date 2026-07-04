import { Trophy, Award, Star, Medal, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Trophy,
    stat: "1x",
    label: "Specialist Cadet School Best",
    description: "Top trainee recognised across the cohort",
  },
  {
    icon: Medal,
    stat: "1x",
    label: "Specialist Cadet School Foundation Term Company Best",
    description: "Company Best in Specialist Cadet School",
  },
  {
    icon: Award,
    stat: "1x",
    label: "Best in PT, Specialist Cadet School",
    description: "Outstanding physical training performance",
  },
  {
    icon: Crown,
    stat: "2x",
    label: "IPPT 100 Pointers",
    description: "Perfect score on the IPPT fitness test",
  },
  {
    icon: Star,
    stat: "100%",
    label: "Improvement Rate",
    description: "Every trainee walks away faster and stronger",
  },
  {
    icon: Zap,
    stat: "Sub 7",
    label: "2.4km Record Breaker",
    description: "First recorded sub 7-minute 2.4km performance by a full-time serviceman",
    featured: true,
  },
];

const HallOfFame = () => {
  return (
    <section id="hall-of-fame" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hall of Fame
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Champions{" "}
            <span className="text-gradient">Produced Here</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Countless champions produced. From first-time finishers to
            record-breakers, every athlete who trains with us leaves stronger,
            faster, and more confident than before.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {achievements
            .filter((a) => !a.featured)
            .map((achievement) => (
              <div
                key={achievement.label}
                className="group relative text-center p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {achievement.stat}
                </div>
                <h3 className="text-lg font-display font-bold mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
        </div>

        {/* Featured Record Breaker */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/50 shadow-glow p-8 sm:p-12 text-center mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              Record Breaker
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gradient mb-4">
              Sub 7
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              2.4km Performance
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Produced the first sub 7-minute 2.4km performance by a full-time serviceman.
            </p>
          </div>
        </div>

        {/* More Achievements Button — inactive until the section is built */}
        <div className="text-center">
          <Button variant="hero" size="lg" disabled>
            More Achievements from our Athletes
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;

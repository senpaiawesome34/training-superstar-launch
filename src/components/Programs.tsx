import { Button } from "@/components/ui/button";
import { Clock, Users, Zap, Medal, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "IPPT Prep",
    description: "Structured 8-12 week program designed specifically to help you ace your IPPT with flying colors.",
    duration: "8-12 weeks",
    icon: Medal,
    features: ["2.4km run focus", "Push-up training", "Sit-up drills", "Progress tracking"],
    popular: true,
    link: "/ippt-prep",
  },
  {
    title: "Speed Fundamentals",
    description: "Master the basics of running faster. Perfect for hobby joggers looking to improve their pace.",
    duration: "6 weeks",
    icon: Zap,
    features: ["Running form", "Interval training", "Recovery techniques", "Flexibility work"],
    popular: false,
    link: "/speed-fundamentals",
  },
  {
    title: "Group Training",
    description: "Join our community sessions and train with like-minded individuals pushing towards their goals.",
    duration: "Ongoing",
    icon: Users,
    features: ["Weekend sessions", "Track workouts", "Peer motivation", "Coach guidance"],
    popular: false,
    link: null,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Training That{" "}
            <span className="text-gradient">Gets Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're starting from zero or looking to shave seconds off your time, we have a program tailored for you.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`relative group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow ${
                program.popular ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-hero text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span>{program.duration}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {program.link ? (
                <Button
                  variant={program.popular ? "hero" : "heroOutline"}
                  className="w-full"
                  asChild
                >
                  <Link to={program.link}>
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant={program.popular ? "hero" : "heroOutline"}
                  className="w-full"
                  disabled
                >
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

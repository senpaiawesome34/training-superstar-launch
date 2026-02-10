import { CheckCircle2, Dumbbell, Heart, TrendingUp, Users, Smile } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "100% of our trainees pass their IPPT on the first attempt after completing our program.",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    description: "Learn from National Athletes and Certified Coaches who Understand your Journey.",
  },
  {
    icon: Heart,
    title: "Built for Beginners",
    description: "No experience needed. We specialize in transforming average Joes into confident runners.",
  },
  {
    icon: Dumbbell,
    title: "Holistic Approach",
    description: "Beyond running — we cover strength, nutrition, and recovery for complete fitness.",
  },
  {
    icon: CheckCircle2,
    title: "Flexible Scheduling",
    description: "Morning, evening, and weekend slots available to fit your busy lifestyle.",
  },
  {
    icon: Smile,
    title: "Supportive Community",
    description: "Join a community of like-minded individuals cheering each other on.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            We're Different, and{" "}
            <span className="text-gradient">You'll Feel It</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Training Superstar Academy isn't just about running laps. We're about building confidence, consistency, and lasting fitness habits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

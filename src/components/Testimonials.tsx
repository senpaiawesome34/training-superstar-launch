import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chu Shun Yuan",
    role: "NSman, 23",
    content: "I went from doubting myself to running a sub-10 minute 2.4km with only 3 weeks of proper training. TSA knew exactly how to push me while keeping training realistic and effective. Couldn't have done this without their guidance.",
    rating: 5,
  },
  {
    name: "Marc Menon",
    role: "Pre-Enlistee, 19",
    content: "Massive shoutout to TSA for bringing my 2.4km run from 14+ mins to 11.5 mins over the course of a month! Couldn't have done it without their structured training programs and persistent motivation. Money very well spent!",
    rating: 5,
  },
  {
    name: "Jonathan Ng",
    role: "Software Engineer, 35",
    content: "The group training sessions are amazing. Great vibes, supportive community, and coaches who actually care. Highly recommend for desk-bound folks!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Real People,{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from everyday runners who transformed their fitness with TSA.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

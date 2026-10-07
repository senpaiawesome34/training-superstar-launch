import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import marcPhoto from "@/assets/marc-menon.jpg.asset.json";
import enzoPhoto from "@/assets/enzo-lim.jpg.asset.json";
import songPhoto from "@/assets/songQuekAsset.jpeg";


const testimonials = [
  {
    name: "Marc Menon",
    role: "Pre-Enlistee, 19",
    content: "Massive shout out to TSA for bringing my 2.4km run from 14+ mins to 11.5 mins over the course of a month, and it helped me pass my pre-enlistee IPPT for the first time! Could not have done it without their structured training programs and persistent motivation. Money very well spent!",
    rating: 5,
    photoUrl: marcPhoto.url,
    journey: "marc-menon",
  },
  {
    name: "Enzo Lim",
        role: "NSF, 19",
        content:
          "The training sessions let me micro manage my running form and allowed me to push my mental to my limits during the workouts. TSA is ultra observant and is able to fine tune me to be as efficient as possible and that helped me every aspect of my running. The workouts are also perfectly catered to improve the anaerobic and aerobic fitness of the 2.4km",
        rating: 5,
        photoUrl: enzoPhoto.url,
        photoPosition: "50% 20%",
        journey: "enzo-lim",
  },
  {
    name: "Song Quek",
    role: "NSF, 22",
    content:
      "I was a sub 9min 2.4km runner and trained for quite long to achieve it. However, my IPPT was in the next week and I needed to hit a sub 8min 30s. It felt impossible to me until I met TSA. Within that short week, I was given a personalized schedule tailored to helping me cut down to the timing required. During training, I corrected minute details such as my running form and my pacing which miraculously shaved my timing down to 8min 25s on the day of my IPPT. TSA is very professional and easy to work with, 100% would recommend.",
    rating: 5,
    photoUrl: songPhoto,
    journey: "song-quek",
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
              className="relative flex flex-col bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
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

              {/* Author + Read More — pinned to the bottom so every card lines up */}
              <div className="mt-auto">
                <div className="flex items-center gap-4">
                  {testimonial.photoUrl ? (
                    <img
                      src={testimonial.photoUrl}
                      alt={testimonial.name}
                      className="w-[4.5rem] h-[4.5rem] rounded-full object-cover object-center border-2 border-primary/40 shadow-glow flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {testimonial.journey && <ReadMoreButton journey={testimonial.journey} />}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <ViewMoreButton />
        </div>
      </div>
    </section>
  );
};

const ReadMoreButton = ({ journey }: { journey: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => navigate(`/testimonials/${journey}`)}
      className="mt-6 w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
    >
      Read More
    </Button>
  );
};

const ViewMoreButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => navigate("/testimonials")}
      className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
    >
      View More Stories
    </Button>
  );
};

export default Testimonials;

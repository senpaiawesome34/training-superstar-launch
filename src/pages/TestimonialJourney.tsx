import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, ArrowLeft, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { journeys } from "@/data/journeys";

const TestimonialJourney = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const journey = slug ? journeys[slug] : undefined;

  if (!journey) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 bg-gradient-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/testimonials")}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Button>

          {/* Photo */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-green/30 via-primary/30 to-brand-gold/30 blur-xl opacity-60" />
              <img
                src={journey.photoUrl}
                alt={journey.photoAlt}
                className="relative w-full max-w-md h-auto rounded-3xl border border-border shadow-2xl"
              />
            </div>
          </div>

          {/* Name & role */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Full Journey
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-3">
              {journey.name}
            </h1>
            <p className="text-muted-foreground text-lg">{journey.role}</p>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative bg-gradient-card rounded-2xl p-8 sm:p-10 border border-primary/20 mb-12">
            <Quote className="w-10 h-10 text-brand-gold mb-4" />
            <p className="text-xl sm:text-2xl font-display font-semibold leading-relaxed">
              "{journey.quote}"
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              — {journey.name}, on training with TSA
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {journey.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-card rounded-xl p-6 border border-border text-center"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Writeup */}
          <div className="max-w-3xl mx-auto">
            {journey.sections.map((section, i) => (
              <div key={i} className="mb-12">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
                    <span className="text-gradient">{section.heading}</span>
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-foreground/90 text-lg leading-relaxed mb-6"
                  >
                    {p}
                  </p>
                ))}
                {section.imageUrl && (
                  <figure className="my-8 overflow-hidden rounded-2xl border border-border bg-gradient-card">
                    <img
                      src={section.imageUrl}
                      alt={section.imageAlt ?? ""}
                      className="mx-auto max-h-[36rem] w-full object-contain"
                    />
                    {section.imageCaption && (
                      <figcaption className="border-t border-border px-5 py-4 text-center text-sm text-muted-foreground">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {section.callout && (
                  <div className="border-l-4 border-brand-gold bg-brand-gold/5 rounded-r-xl p-6 my-8">
                    <p className="text-lg italic text-foreground/95 leading-relaxed">
                      "{section.callout}"
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      — {journey.name}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Closing */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border text-center">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {journey.closing}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TestimonialJourney;

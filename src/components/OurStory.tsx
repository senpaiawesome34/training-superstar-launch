import interclubImg from "@/assets/our-story-interclub.jpg.asset.json";
import trackImg from "@/assets/our-story-track.jpg.asset.json";
import teamImg from "@/assets/our-story-team.jpg.asset.json";
import bridgeImg from "@/assets/our-story-bridge.jpg.asset.json";

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
            How It Began
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="text-gradient">Story</span>
          </h2>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Training Superstar Academy (TSA) is a revolutionary project aimed at bridging the gap
            between casual social run clubs and elite performance coaching. Our coaches aim to
            deliver science-backed, expert-led training that balances injury-free longevity with
            fast, measurable results.
          </p>
        </div>

        {/* Interclub night photo — full width */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <img
              src={interclubImg.url}
              alt="TSA athletes at the SA Interclub Championships under the track lights"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* Origin story: text + track image */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold">
              It started as <span className="text-brand-gold">an idea.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Drawing from experiences of constantly getting bombarded by friends, family, and
              total strangers with the same frantic question:{" "}
              <span className="text-foreground font-medium">
                "I've got IPPT in 3 weeks... how do I hit this timing?"
              </span>{" "}
              What began as quick, informal pacing &amp; mechanical advice, coupled with workouts
              generated on the fly — plus a brand derived from a tongue-in-cheek coaching nickname
              — turned into a streak of guaranteed results, seemingly pulled out of thin air.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Realizing that athletic expertise &amp; experience, combined with structured
              coaching, could turn last-minute panic into peak performance, TSA was established to
              make serious athletic progress accessible to everyone.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <img
              src={trackImg.url}
              alt="TSA athlete celebrating across the finish line on the track"
              className="w-full h-full min-h-72 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Ethos block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="bg-gradient-card rounded-3xl border border-border p-8 sm:p-12 shadow-card">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Ethos
            </span>
            <p className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mt-4 mb-8">
              <span className="text-gradient">"Do Better."</span>
            </p>
            <div className="space-y-6 text-left">
              <p className="text-muted-foreground leading-relaxed">
                Coined during a spontaneous flash of inspiration, the phrase quickly took on a
                deeper weight. It was forged in response to the quiet friction of everyday life —
                the subtle, unspoken resistance that all athletes face when trying to pursue what
                matters most to them: chasing a better tomorrow. It is a simple yet powerful and
                poignant rebuttal to the banal tendency that so many fall into; to deride, demean
                and critique others, instead of lending a helping hand and serving to uplift
                instead of treading down upon others.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It serves as a call for all athletes to{" "}
                <span className="text-foreground font-medium">look inwards</span> towards oneself,
                focusing on self-improvement rather than petty oneupmanship or jealous acts of
                comparison. This motto is a mantra to tune out the noise and chatter, rise above
                the mind games, and channel your energy purely into the continuous chase of an{" "}
                <span className="text-brand-gold font-medium">elevated self</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Mission: team image + text */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card order-2 md:order-1">
            <img
              src={teamImg.url}
              alt="TSA athletes celebrating together after a race"
              className="w-full h-full min-h-72 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-foreground/90 leading-relaxed">
              At TSA, you run to build the sharpest, strongest version of yourself, first and
              foremost. It is this exact culture of steady, uncompromising growth that drives us
              forward as a brand.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              It's why we have made it our mission in expanding TSA to reach every athlete,
              regardless of their level of aptitude or fitness.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl font-display font-semibold leading-relaxed">
            Our only ask is that you are ready to{" "}
            <span className="text-brand-gold">Raise your Standard</span> and{" "}
            <span className="text-gradient">Take your Game to the Next Level</span>.
          </p>
          <p className="text-muted-foreground text-lg mt-4">See you on the other side…</p>
        </div>

        {/* Bridge image — full width, closing the story */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <img
              src={bridgeImg.url}
              alt="TSA athlete racing across a bridge at a road race"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

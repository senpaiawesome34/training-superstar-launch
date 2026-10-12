import movementMechanicsAsset from "@/assets/partner-movement-mechanics.jpg.asset.json";
import alternativeXAsset from "@/assets/partner-alternative-x.jpg.asset.json";
import tfAsset from "@/assets/partner-tf.jpg.asset.json";
import teamFabianAsset from "@/assets/partner-team-fabian.png.asset.json";
import fwccAsset from "@/assets/partner-fwcc.jpg.asset.json";

type Partner = {
  name: string;
  logo: string;
  mark?: string;
  surface: string;
  url: string;
};

const partners: Partner[] = [
  {
    name: "Movement Mechanics Physiotherapy",
    logo: movementMechanicsAsset.url,
    surface: "bg-logo-light",
    url: "https://www.mmphysio.com.sg/",
  },
  {
    name: "Alternative X",
    logo: alternativeXAsset.url,
    surface: "bg-logo-dark",
    url: "https://www.instagram.com/alternativex_sg/",
  },
  {
    name: "Team Fabian",
    logo: teamFabianAsset.url,
    mark: tfAsset.url,
    surface: "bg-logo-light",
    url: "https://www.instagram.com/teamfabiansg/",
  },
  {
    name: "FWCC — Creating Champions",
    logo: fwccAsset.url,
    surface: "bg-brand-navy",
    url: "https://www.fwcc.co/",
  },
];

const Collaboration = () => {
  return (
    <section className="py-12 bg-background border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            In Collaboration With
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              aria-label={`${partner.name} — opens in a new tab`}
              className={`${partner.surface} h-24 sm:h-28 rounded-xl border border-border overflow-hidden flex items-center justify-center p-4 transition-all duration-500 hover:border-primary/50`}
            >
              {partner.mark ? (
                <div className="flex h-full w-full min-h-0 flex-col items-center justify-center gap-1">
                  <img
                    src={partner.mark}
                    alt=""
                    className="h-6 sm:h-7 w-auto flex-shrink-0 object-contain"
                  />
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-[94%] h-auto max-w-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;

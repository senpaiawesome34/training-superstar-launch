import movementMechanicsAsset from "@/assets/partner-movement-mechanics.jpg.asset.json";
import alternativeXAsset from "@/assets/partner-alternative-x.jpg.asset.json";
import tfAsset from "@/assets/partner-tf.jpg.asset.json";
import fwccAsset from "@/assets/partner-fwcc.jpg.asset.json";

const partners = [
  {
    name: "Movement Mechanics Physiotherapy",
    logo: movementMechanicsAsset.url,
    surface: "bg-logo-light",
  },
  {
    name: "Alternative X",
    logo: alternativeXAsset.url,
    surface: "bg-logo-dark",
  },
  {
    name: "TF",
    logo: tfAsset.url,
    surface: "bg-logo-light",
  },
  {
    name: "FWCC — Creating Champions",
    logo: fwccAsset.url,
    surface: "bg-brand-navy",
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
            <div
              key={partner.name}
              className={`${partner.surface} h-24 sm:h-28 rounded-xl border border-border overflow-hidden flex items-center justify-center p-4 transition-all duration-500 hover:border-primary/50`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;

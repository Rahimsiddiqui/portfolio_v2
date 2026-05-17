import { abilities } from "@/constants";

const FeatureCards = () => {
  return (
    <section id="feature-cards" className="w-full mt-28 md:mt-24 padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, description }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white/90 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white/80 text-lg">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

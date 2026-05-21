import { abilities } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeatureCards = () => {
  useGSAP(() => {
    gsap.from(".animate-card-ability", {
      yPercent: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#feature-cards",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="feature-cards"
      className="w-full mt-28 md:mt-24 padding-x-lg max-w-520 mx-auto"
    >
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, description }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 animate-card-ability"
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

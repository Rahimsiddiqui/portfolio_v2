import Image from "next/image";
import { useRef, useCallback } from "react";

const GlowCard = ({ card, className, onClick, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty("--start", angle + 60);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (!onClick) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card card-border bg-[#080808] ${card.mentions ? "review-card" : "timeline-card"} rounded-xl py-10 px-6 min-[450px]:p-10 mb-6 break-inside-avoid-column ${className || ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {card.review &&
          Array.from({ length: 5 }, (_, idx) => (
            <Image
              src="/images/star.png"
              alt="Star Icon"
              width={20}
              height={20}
              key={idx + 1}
              className="size-5"
            />
          ))}
      </div>
      <div className="mt-7 mb-6.5">
        <p className="text-white/90 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;

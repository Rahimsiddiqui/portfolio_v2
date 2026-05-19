import Image from "next/image";

const Button = ({ className, id, text }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        if (id.includes("/projects")) {
          window.location.href = "/projects";
        }

        const target = document.getElementById(id);

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
      aria-label={`Scroll to ${text}`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          {id.includes("/projects") ? (
            <Image
              src="/images/arrow-down.svg"
              className="-rotate-90"
              alt="arrow"
              width={24}
              height={24}
            />
          ) : (
            <img src="/images/arrow-down.svg" alt="arrow" />
          )}
        </div>
      </div>
    </button>
  );
};

export default Button;

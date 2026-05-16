import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const triggersRef = useRef([]);

  useGSAP(() => {
    // Kill previous ScrollTriggers to prevent memory leak
    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Create object to animate
      const obj = { val: 0 };

      const tween = gsap.to(obj, {
        val: item.value,
        duration: 2,
        ease: "power1.inOut",
        snap: { val: 1 },
        onUpdate: () => {
          numberElement.innerText = Math.round(obj.val) + item.suffix;
        },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
      });

      // Store ScrollTrigger reference for cleanup
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    // Cleanup function
    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg gap-3 p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white/90 text-5xl font-bold mb-2">
              0
            </div>
            <div className="text-white/75 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;

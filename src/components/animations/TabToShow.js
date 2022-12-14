import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const TabToShow = (ref, hide) => {
  const el = ref.current;
  el.addEventListener("click", () => {
    gsap.to(el, {
      ease: "back.inOut",
      duration: 1.5,
      y: hide ? 0 : -290,
      x: hide ? 0 : 200,
      inertia: true,
      rotate: hide ? 0 : 55,
    });
  });
};

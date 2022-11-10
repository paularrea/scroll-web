import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const OnClick = (ref) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el);

  container.forEach((el) => {
    el.addEventListener("click", (e) => {
      gsap.to(el, {
        scale: 1.1,
        ease: "power2.out",
        duration: .6,
        rotate: 360,
      });
    });
    el.addEventListener("mouseenter", (e) => {
        gsap.to(el, {
          scale: 1.1,
          ease: "power2.out",
          duration: .6,
          rotate: 360,
        });
      });
  });
};

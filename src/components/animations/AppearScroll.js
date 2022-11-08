import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AppearScroll = (ref) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el);

  container.forEach((el) => {
    gsap.fromTo(
      el,
      {
        scale: 1,
        y: 0,
      },
      {
        duration:2,
        y: 0,
        scale: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        inertia: true,
        scrollTrigger: {
          scrub: 2,
          trigger: el,
          start: "top 90%",
        },
      }
    );
  });
};

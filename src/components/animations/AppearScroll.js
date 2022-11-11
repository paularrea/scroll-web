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
        yPercent: 0,
      },
      {
        duration:2,
        yPercent: -20,
        scale: 1.4,
        ease: "power2.out",
        stagger: 0.2,
        inertia: true,
        scrollTrigger: {
          scrub: 5,
          trigger: el,
          start: "top 90%",
        },
      }
    );
  });
};

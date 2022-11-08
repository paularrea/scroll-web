import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const InertiaScroll = (ref) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el.children);

  container.forEach((el) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        scale: 0.9,
        yPercent: 0,
      },
      {
        duration:2,
        yPercent: -40,
        scale: 1,
        autoAlpha: 1,
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

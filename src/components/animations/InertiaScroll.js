import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const InertiaScroll = (ref, delay) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el);

  container.forEach((el) => {
    gsap.fromTo(
      el,
      {
        yPercent: 40,
        scale: 0.9,
      },
      {
        delay: delay ? delay : 1,
        scale: 1,
        duration:2,
        yPercent: 0,
        ease: "power2.out",
        stagger: 0.2,
        inertia: true,
        scrollTrigger: {
          scrub: 3,
          trigger: el,
          start: "top 95%",
        },
      }
    );
  });
};

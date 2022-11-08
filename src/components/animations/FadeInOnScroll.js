import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const FadeInOnScroll = (ref) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el.children);

  container.forEach((el) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        yPercent: 0,
      },
      {
        delay: 1,
        duration:2,
        yPercent: -20,
        scale: 1,
        autoAlpha: 1,
        ease: "power2.out",
        stagger: 0.2,
        inertia: true,
        scrollTrigger: {
          scrub: 2,
          trigger: el,
          start: "top 90%",
          end: "top 80%"
        },
      }
    );
  });
};

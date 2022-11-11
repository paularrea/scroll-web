import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Intro = (ref) => {
  const el = ref.current;
  const tl = gsap;
  gsap.set(el, {
    xPercent: -50,
    left: "50%",
    yPercent: -50,
    top: "50%",
    position: "absolute",
  });

  tl.fromTo(
    "#creative h1",
    {
      xPercent: -100,
      opacity: 0,
      // rotate: -10,
    },
    {
      delay: 1,
      // rotate: 0,
      stagger: 0.3,
      opacity: 1,
      xPercent: 0,
      ease: "power2.out",
      duration: 1,
    }
  );
  tl.fromTo(
    "#visual h1",
    {
      xPercent: 100,
      opacity: 0,
      // rotate: 10,
    },
    {
      delay: 1,
      // rotate: 0,
      stagger: 0.4,
      opacity: 1,
      xPercent: 0,
      ease: "power2.out",
      duration: 1,
    }
  );
  tl.fromTo(
    "#developer",
    {
      yPercent: 56,
      opacity: 0,
    },
    {
      delay: 3.5,
      opacity: 1,
      yPercent: 46,
      ease: "power2.out",
      duration: 1,
    }
  );

  gsap.to(el, {
    xPercent: 0,
    yPercent: 0,
    top: "1rem",
    left: "5vw",
    position: "fixed",
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "0px 47%",
      end: "bottom 0",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });
};

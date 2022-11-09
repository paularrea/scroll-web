import { gsap } from "gsap";

export const ShowBurger = (ref, delay) => {
  const el = ref.current;
  const container = gsap.utils.toArray(el);

  container.forEach((el) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
      },
      {
        delay: delay ? delay : 2,
        duration: 2,
        autoAlpha: 1,
      }
    );
  });
};

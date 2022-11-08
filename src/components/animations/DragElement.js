import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export const DragElement = (instanceRef, targetRef) => {
    instanceRef.current = Draggable.create(targetRef.current, {
        inertia: true,
        bounds: document.getElementById("app"),
      });
      targetRef.current.addEventListener("mouseenter", () => {
        gsap.to(targetRef.current, {
          scale: 1.02,
          ease: "power2.out",
          duration: 0.3,
          zIndex: 5,
        });
      });
      targetRef.current.addEventListener("mouseleave", () => {
        gsap.to(targetRef.current, {
          scale: 1,
          ease: "power2.out",
          duration: 0.3,
          zIndex: 1,
        });
      });
}
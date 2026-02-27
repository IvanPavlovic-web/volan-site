import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Check if touch device
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      // Fast, responsive cursor following
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });

      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // Hover effects for interactive elements
    const onMouseEnterInteractive = () => {
      gsap.to(dot, { scale: 2, duration: 0.2 });
      gsap.to(outline, { scale: 1.5, opacity: 0.5, duration: 0.2 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(outline, { scale: 1, opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  // Don't render on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden lg:block"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundColor: "#C56B2C",
        }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline hidden lg:block"
        style={{
          transform: "translate(-50%, -50%)",
          borderColor: "#1F4E5F",
        }}
      />
    </>
  );
};

export default CustomCursor;

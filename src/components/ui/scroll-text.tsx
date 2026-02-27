import { motion, useAnimationFrame, useInView, useMotionValue, type Variants } from "framer-motion";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollDirection = "left" | "right" | "up" | "down";
type ScrollTag = "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type ScrollTextProps = {
  text: string;
  as?: ScrollTag;
  direction?: ScrollDirection;
  speed?: number;
  variants?: Variants;
  className?: string;
  classname?: string;
  letterAnime?: boolean;
  lineAnime?: boolean;
  repeat?: number;
  gap?: number;
};

const getDefaultVariants = (direction: ScrollDirection): Variants => {
  const horizontal = direction === "left" || direction === "right";
  const offsetX = direction === "right" ? -24 : direction === "left" ? 24 : 0;
  const offsetY = direction === "down" ? -20 : direction === "up" ? 20 : 20;

  return {
    hidden: {
      opacity: 0,
      filter: "blur(6px)",
      x: horizontal ? offsetX : 0,
      y: horizontal ? 0 : offsetY,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };
};

const ScrollText = ({
  text,
  as = "p",
  direction = "left",
  speed = 30,
  variants,
  className,
  classname,
  letterAnime = false,
  lineAnime = false,
  repeat = 4,
  gap = 32,
}: ScrollTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sampleRef = useRef<HTMLDivElement>(null);
  const scrollDirectionRef = useRef<1 | -1>(1);

  const [itemSize, setItemSize] = useState(0);
  const [containerSize, setContainerSize] = useState(0);

  const position = useMotionValue(0);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const isVertical = direction === "up" || direction === "down";

  const axisDirection = direction === "left" || direction === "up" ? -1 : 1;
  const revealVariants = variants ?? getDefaultVariants(direction);
  const cycleSize = Math.max(itemSize + gap, 1);

  const repeatCount = useMemo(() => {
    if (!itemSize || !containerSize) return repeat;
    return Math.max(repeat, Math.ceil((containerSize * 2) / cycleSize) + 1);
  }, [containerSize, cycleSize, itemSize, repeat]);

  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      scrollDirectionRef.current = current >= previous ? 1 : -1;
      previous = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      setItemSize(isVertical ? sampleRef.current?.offsetHeight ?? 0 : sampleRef.current?.offsetWidth ?? 0);
      setContainerSize(isVertical ? containerRef.current?.offsetHeight ?? 0 : containerRef.current?.offsetWidth ?? 0);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    if (sampleRef.current) observer.observe(sampleRef.current);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isVertical, text]);

  useAnimationFrame((_, delta) => {
    if (!isInView || !itemSize) return;

    const step = (speed * delta) / 1000;
    const directionMultiplier = axisDirection * scrollDirectionRef.current;
    let next = position.get() + step * directionMultiplier;

    if (Math.abs(next) >= cycleSize) {
      next %= cycleSize;
    }

    position.set(next);
  });

  const Tag = as;

  const renderText = (enableLetterAnimation: boolean): ReactNode => {
    if (!letterAnime || !enableLetterAnimation) return text;

    return text.split("").map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        className="inline-block"
        variants={revealVariants}
        transition={{ duration: 0.2, delay: index * 0.02, ease: "linear" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
    >
      <motion.div
        className={cn("flex", isVertical ? "flex-col" : "whitespace-nowrap")}
        style={isVertical ? { y: position, gap } : { x: position, gap }}
      >
        {Array.from({ length: repeatCount }).map((_, index) => {
          const shouldAnimateLine = lineAnime && index === 0;
          const itemClass = cn("leading-tight", className, classname);

          return (
            <div
              key={`scroll-text-item-${index}`}
              ref={index === 0 ? sampleRef : undefined}
              className={isVertical ? "w-full" : "shrink-0"}
              aria-hidden={index > 0}
            >
              {shouldAnimateLine ? (
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={revealVariants}>
                  <Tag className={itemClass}>{renderText(true)}</Tag>
                </motion.div>
              ) : (
                <Tag className={itemClass}>{renderText(index === 0)}</Tag>
              )}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ScrollText;

import { cn } from "@/lib/utils";
import { type HTMLAttributes, type ReactNode } from "react";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:28s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`marquee-track-${index}`}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical ? "flex-col" : "flex-row",
            vertical && !reverse && "[animation:marquee-vertical_var(--duration)_linear_infinite]",
            vertical && reverse && "[animation:marquee-vertical-reverse_var(--duration)_linear_infinite]",
            !vertical && !reverse && "[animation:marquee_var(--duration)_linear_infinite]",
            !vertical && reverse && "[animation:marquee-reverse_var(--duration)_linear_infinite]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

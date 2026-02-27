import { useEffect, useRef } from "react";
import "./Squares.css";

type SquaresDirection = "up" | "down" | "left" | "right" | "diagonal";

type HoverSquare = {
  x: number;
  y: number;
} | null;

type SquaresProps = {
  direction?: SquaresDirection;
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  size?: number;
  hoverFillColor?: string;
  hoverColor?: string;
  className?: string;
};

const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  size,
  hoverFillColor = "#222",
  hoverColor,
  className = "",
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef<HoverSquare>(null);

  const effectiveSquareSize = size ?? squareSize;
  const effectiveHoverColor = hoverColor ?? hoverFillColor;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / effectiveSquareSize) * effectiveSquareSize;
      const startY = Math.floor(gridOffset.current.y / effectiveSquareSize) * effectiveSquareSize;

      for (let x = startX; x < canvas.width + effectiveSquareSize; x += effectiveSquareSize) {
        for (let y = startY; y < canvas.height + effectiveSquareSize; y += effectiveSquareSize) {
          const squareX = x - (gridOffset.current.x % effectiveSquareSize);
          const squareY = y - (gridOffset.current.y % effectiveSquareSize);

          if (
            hoveredSquare.current &&
            Math.floor((x - startX) / effectiveSquareSize) === hoveredSquare.current.x &&
            Math.floor((y - startY) / effectiveSquareSize) === hoveredSquare.current.y
          ) {
            ctx.fillStyle = effectiveHoverColor;
            ctx.fillRect(squareX, squareY, effectiveSquareSize, effectiveSquareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, effectiveSquareSize, effectiveSquareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
      );

      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.42)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          break;
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + effectiveSquareSize) % effectiveSquareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / effectiveSquareSize) * effectiveSquareSize;
      const startY = Math.floor(gridOffset.current.y / effectiveSquareSize) * effectiveSquareSize;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / effectiveSquareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / effectiveSquareSize);

      hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [borderColor, direction, effectiveHoverColor, effectiveSquareSize, speed]);

  return <canvas ref={canvasRef} className={`squares-canvas ${className}`} />;
};

export default Squares;

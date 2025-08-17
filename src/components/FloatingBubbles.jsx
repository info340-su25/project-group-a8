import { useMemo } from "react";

export default function FloatingBubbles({ count = 16 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.floor(24 + Math.random() * 72);
      const left = Math.random() * 100;
      const duration = 14 + Math.random() * 12;
      const delay = Math.random() * 8;
      const opacity = 0.25 + Math.random() * 0.35;
      return { id: i, size, left, duration, delay, opacity };
    });
  }, [count]);

  return (
    <div className="floating-bubbles" aria-hidden="true">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
}

import { useMemo } from "react";

export default function FloatingBubbles({ items = [], minSize = 160, maxSize = 260, speedRange = [28, 46], count = 12, onBubbleClick, }) {
  const bubbles = useMemo(() => {
    if (!items.length) return [];

    return Array.from({ length: count }).map((_, i) => {
      const item = items[i % items.length];
      const label = typeof item === "string" ? item : (item?.title ?? "");

      const size = Math.round(minSize + Math.random() * (maxSize - minSize));
      const left = Math.random() * 100;
      const duration = speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]);
      const delay = -Math.random() * duration;

      return { id: (item && item.id) ?? i, item, label, size, left, duration, delay,
      };
    });
  }, [items, minSize, maxSize, speedRange, count]);

  return (
    <div className="floating-bubbles" style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
      {bubbles.map((b) => (
        <button key={b.id} type="button" className="text-bubble" onClick={() => onBubbleClick?.(b.item)}
          style={{ position: 'absolute' , left: `${b.left}%`, width: b.size, height: b.size, animationDuration: `${b.duration}s`, animationDelay: `${b.delay}s`, pointerEvents: "auto"}}>
          <span className="bubble-text text-dark-green px-3">{b.label}</span>
        </button>
      ))}
    </div>
    
  );
}

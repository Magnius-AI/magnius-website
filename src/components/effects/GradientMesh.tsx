import { useEffect, useRef } from 'react';

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className = '' }: GradientMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate the gradient positions subtly
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.002;

      const orb1X = 50 + Math.sin(time) * 20;
      const orb1Y = 30 + Math.cos(time * 0.7) * 15;
      const orb2X = 80 + Math.cos(time * 0.8) * 15;
      const orb2Y = 70 + Math.sin(time * 0.6) * 20;
      const orb3X = 20 + Math.sin(time * 0.5) * 10;
      const orb3Y = 60 + Math.cos(time * 0.9) * 15;

      container.style.background = `
        radial-gradient(
          ellipse 60% 40% at ${orb1X}% ${orb1Y}%,
          rgba(0, 212, 255, 0.08) 0%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 50% 35% at ${orb2X}% ${orb2Y}%,
          rgba(0, 184, 169, 0.06) 0%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 45% 30% at ${orb3X}% ${orb3Y}%,
          rgba(0, 102, 255, 0.05) 0%,
          transparent 50%
        ),
        transparent
      `;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default GradientMesh;

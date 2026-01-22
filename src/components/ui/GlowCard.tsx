import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface GlowCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'teal' | 'electric' | 'violet';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const glowColors = {
  cyan: 'rgba(0, 212, 255, 0.15)',
  teal: 'rgba(0, 184, 169, 0.15)',
  electric: 'rgba(0, 102, 255, 0.15)',
  violet: 'rgba(124, 58, 237, 0.15)',
};

const paddingSizes = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlowCard({
  children,
  className,
  glowColor = 'cyan',
  hoverEffect = true,
  padding = 'md',
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={clsx(
        'relative overflow-hidden rounded-2xl',
        'bg-graphite/60 backdrop-blur-sm',
        'border border-slate/40',
        'transition-all duration-500 ease-out-expo',
        hoverEffect && [
          'hover:border-cyan/30',
          'hover:shadow-glow-md',
        ],
        paddingSizes[padding],
        className
      )}
      onMouseMove={handleMouseMove}
      whileHover={hoverEffect ? { y: -4 } : undefined}
      {...props}
    >
      {/* Mouse-following glow effect */}
      {hoverEffect && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              ${glowColors[glowColor]},
              transparent 40%
            )`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Subtle border glow on hover */}
      {hoverEffect && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent, ${glowColors[glowColor]})`,
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
        />
      )}
    </motion.div>
  );
}

export default GlowCard;

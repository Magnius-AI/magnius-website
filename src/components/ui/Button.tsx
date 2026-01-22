import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glow?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    relative overflow-hidden
    bg-gradient-to-r from-cyan to-teal
    text-void font-semibold
    hover:shadow-glow-cyan
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan before:to-electric
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
  `,
  secondary: `
    bg-graphite border border-slate/50
    text-frost font-medium
    hover:bg-slate hover:border-cyan/30
    hover:shadow-glow-sm
  `,
  ghost: `
    bg-transparent
    text-silver font-medium
    hover:text-frost hover:bg-graphite/50
  `,
  outline: `
    bg-transparent border border-cyan/30
    text-cyan font-medium
    hover:bg-cyan/10 hover:border-cyan/50
    hover:shadow-glow-sm
  `,
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={clsx(
          'relative inline-flex items-center justify-center gap-2',
          'font-body transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        disabled={disabled || isLoading}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {/* Content wrapper to stay above ::before pseudo-element */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            leftIcon
          )}
          {children}
          {!isLoading && rightIcon}
        </span>

        {/* Glow effect for primary variant */}
        {variant === 'primary' && (
          <span
            className="absolute inset-0 -z-10 blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-80"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #00b8a9)',
            }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

import { forwardRef, type InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-silver mb-2"
          >
            {label}
          </label>
        )}

        <div className="relative group">
          {/* Glow border on focus */}
          <div
            className={clsx(
              'absolute -inset-0.5 rounded-xl opacity-0 blur transition-opacity duration-300',
              'bg-gradient-to-r from-cyan via-teal to-electric',
              'group-focus-within:opacity-30'
            )}
          />

          {/* Input container */}
          <div className="relative flex items-center">
            {leftIcon && (
              <span className="absolute left-4 text-muted group-focus-within:text-cyan transition-colors">
                {leftIcon}
              </span>
            )}

            <input
              ref={ref}
              id={inputId}
              className={clsx(
                'w-full',
                'bg-graphite/80 backdrop-blur-sm',
                'border border-slate/50',
                'text-frost placeholder:text-muted',
                'rounded-xl',
                'transition-all duration-300',
                'focus:outline-none focus:border-cyan/50 focus:bg-charcoal',
                'hover:border-slate-light',
                leftIcon ? 'pl-12' : 'pl-4',
                rightIcon ? 'pr-12' : 'pr-4',
                'py-3.5',
                error && 'border-red-500/50 focus:border-red-500',
                className
              )}
              {...props}
            />

            {rightIcon && (
              <span className="absolute right-4 text-muted group-focus-within:text-cyan transition-colors">
                {rightIcon}
              </span>
            )}
          </div>
        </div>

        {/* Error or hint message */}
        {(error || hint) && (
          <p
            className={clsx(
              'mt-2 text-sm',
              error ? 'text-red-400' : 'text-muted'
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

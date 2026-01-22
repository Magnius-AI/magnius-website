import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface WaitlistFormProps {
  className?: string;
  size?: 'sm' | 'lg';
}

export function WaitlistForm({ className, size = 'lg' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call - just console.log for now as per requirements
    try {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log to console (backend will be handled separately)
      console.log('Waitlist signup:', { email, timestamp: new Date().toISOString() });

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const isLarge = size === 'lg';

  return (
    <div className={clsx('w-full', className)}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={clsx(
              'flex items-center justify-center gap-3 rounded-2xl',
              'bg-teal/10 border border-teal/30',
              isLarge ? 'p-6' : 'p-4'
            )}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/20">
              <Check className="h-5 w-5 text-teal" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-frost">You're on the list!</p>
              <p className="text-sm text-silver">We'll be in touch soon.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative"
          >
            {/* Glow effect behind the form */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-50 blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 184, 169, 0.2))',
              }}
            />

            <div
              className={clsx(
                'relative flex items-center gap-2 rounded-2xl',
                'bg-graphite/80 backdrop-blur-sm',
                'border border-slate/50',
                'transition-all duration-300',
                'focus-within:border-cyan/50 focus-within:shadow-glow-sm',
                isLarge ? 'p-2' : 'p-1.5'
              )}
            >
              {/* Email Icon */}
              <div className={clsx('text-muted', isLarge ? 'pl-4' : 'pl-3')}>
                <Mail className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
              </div>

              {/* Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email"
                className={clsx(
                  'flex-1 bg-transparent',
                  'text-frost placeholder:text-muted',
                  'focus:outline-none',
                  isLarge ? 'py-3 text-base' : 'py-2 text-sm'
                )}
                disabled={status === 'loading'}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className={clsx(
                  'flex items-center justify-center gap-2 rounded-xl',
                  'font-semibold text-void',
                  'bg-gradient-to-r from-cyan to-teal',
                  'transition-all duration-300',
                  'hover:shadow-glow-cyan hover:scale-[1.02]',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none',
                  isLarge ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'
                )}
              >
                {status === 'loading' ? (
                  <svg
                    className={clsx('animate-spin', isLarge ? 'h-5 w-5' : 'h-4 w-4')}
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
                  <>
                    <span className={clsx(isLarge ? 'inline' : 'hidden sm:inline')}>
                      Join Waitlist
                    </span>
                    <ArrowRight className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {status === 'error' && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Privacy note */}
      {status !== 'success' && (
        <p className={clsx('text-muted text-center', isLarge ? 'mt-4 text-sm' : 'mt-3 text-xs')}>
          No spam, ever. We'll only email you when we launch.
        </p>
      )}
    </div>
  );
}

export default WaitlistForm;

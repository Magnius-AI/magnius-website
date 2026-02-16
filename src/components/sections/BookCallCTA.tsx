import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { BRAND } from '../../lib/constants';

interface BookCallCTAProps {
  className?: string;
  size?: 'sm' | 'lg';
}

export function BookCallCTA({ className, size = 'lg' }: BookCallCTAProps) {
  const isLarge = size === 'lg';

  return (
    <div className={clsx('w-full', className)}>
      <div className="relative">
        {/* Glow effect behind the button */}
        <div
          className="absolute -inset-1 rounded-2xl opacity-50 blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 184, 169, 0.2))',
          }}
        />

        <a
          href={BRAND.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'relative flex items-center justify-center gap-3 rounded-2xl',
            'bg-gradient-to-r from-cyan to-teal text-void',
            'font-semibold',
            'transition-all duration-300',
            'hover:shadow-glow-cyan hover:scale-[1.02]',
            isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
          )}
        >
          <Calendar className={isLarge ? 'h-6 w-6' : 'h-5 w-5'} />
          <span>Book a Call</span>
          <ArrowRight className={isLarge ? 'h-6 w-6' : 'h-5 w-5'} />
        </a>
      </div>

      {/* Privacy note */}
      <p className={clsx('text-muted text-center', isLarge ? 'mt-4 text-sm' : 'mt-3 text-xs')}>
        No commitment required. See if we're a fit.
      </p>
    </div>
  );
}

export default BookCallCTA;

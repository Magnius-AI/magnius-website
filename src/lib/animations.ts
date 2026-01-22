import { type Variants, type Transition } from 'framer-motion';

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  // Smooth, professional easing
  smooth: {
    type: 'tween',
    ease: [0.16, 1, 0.3, 1], // easeOutExpo
    duration: 0.8,
  } as Transition,

  // Spring for bouncy interactions
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  } as Transition,

  // Quick for micro-interactions
  quick: {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.3,
  } as Transition,

  // Slow for dramatic reveals
  slow: {
    type: 'tween',
    ease: [0.16, 1, 0.3, 1],
    duration: 1.2,
  } as Transition,
};

// ============================================
// PAGE LOAD ORCHESTRATION
// ============================================

export const pageLoadSequence = {
  // Network draws first (background)
  network: { delay: 0, duration: 1.5 },
  // Logo emerges
  logo: { delay: 0.3, duration: 0.5 },
  // Headline reveals word by word
  headline: { delay: 0.6, duration: 0.6, stagger: 0.1 },
  // Subtext fades in
  subtext: { delay: 0.9, duration: 0.3 },
  // CTA pulses with glow
  cta: { delay: 1.2, duration: 0.3 },
  // Navigation slides down
  nav: { delay: 1.4, duration: 0.4 },
  // Secondary elements
  secondary: { delay: 1.6, duration: 0.5 },
};

// ============================================
// REVEAL VARIANTS (Scroll-triggered)
// ============================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: transitions.smooth,
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ============================================
// HERO SPECIFIC ANIMATIONS
// ============================================

export const heroHeadline: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      ...transitions.slow,
      delay: pageLoadSequence.headline.delay,
    },
  },
};

export const heroSubtext: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitions.smooth,
      delay: pageLoadSequence.subtext.delay,
    },
  },
};

export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...transitions.spring,
      delay: pageLoadSequence.cta.delay,
    },
  },
};

export const heroNav: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitions.smooth,
      delay: pageLoadSequence.nav.delay,
    },
  },
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: transitions.quick,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: transitions.quick,
  },
};

export const glowHover = {
  rest: {
    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
  },
  hover: {
    boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
    transition: transitions.quick,
  },
};

// ============================================
// NAVIGATION ANIMATIONS
// ============================================

export const navLinkHover = {
  rest: {
    color: '#9ca3af', // silver
  },
  hover: {
    color: '#00d4ff', // cyan
    transition: { duration: 0.2 },
  },
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Creates a stagger delay based on index
 */
export const getStaggerDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

/**
 * Creates custom variants with specific delay
 */
export const withDelay = (variants: Variants, delay: number): Variants => {
  return {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as { transition?: Transition }).transition,
        delay,
      },
    },
  };
};

/**
 * Viewport settings for scroll-triggered animations
 */
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-50px',
};

// ============================================
// NETWORK CANVAS ANIMATION HELPERS
// ============================================

export const networkAnimationConfig = {
  nodeCount: 80,
  connectionDistance: 150,
  nodeRadius: { min: 2, max: 4 },
  nodeSpeed: 0.3,
  connectionOpacity: 0.15,
  colors: {
    nodes: ['#00d4ff', '#00b8a9', '#0066ff'],
    connections: 'rgba(0, 212, 255, 0.1)',
  },
};

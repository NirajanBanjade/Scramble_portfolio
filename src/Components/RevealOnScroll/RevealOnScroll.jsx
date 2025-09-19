import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './RevealOnScroll.css';

const RevealOnScroll = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  threshold = 0.1
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      case 'scale':
        return { scale: 0.8, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'scale':
        return { scale: 1, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
<motion.div
  ref={ref}
  className={`reveal-container ${className}`}
  initial={getInitialPosition()}
  animate={inView ? getAnimatePosition() : getInitialPosition()}
  transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  style={{
    pointerEvents: 'auto',   // ✅ allow clicks to pass to children
    position: 'relative',    // create a predictable stacking context
    zIndex: 0,               // don’t sit above interactive children
  }}
>
  {children}
</motion.div>

  );
};

export default RevealOnScroll;

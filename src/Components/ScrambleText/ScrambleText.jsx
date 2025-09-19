import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrambleText.css';
import { useMemo } from 'react';

const ScrambleText = ({
  text,
  className = '',
  delay = 0,
  duration = 600,
  triggerOnScroll = true,
  mode = 'block', // 'inline' | 'block'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  // 🔒 remember forever if we've already played once
  const playedRef = useRef(false);

  // Only fire the observer once when it first enters the viewport.
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const characters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', []);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const randomOfLength = (len) =>
    Array.from({ length: len }, () =>
      characters[(Math.random() * characters.length) | 0]
    ).join('');

  const startScramble = () => {
    if (playedRef.current) return; // ✅ already ran once
    playedRef.current = true;

    setIsAnimating(true);
    const len = text.length;

    // derive step from duration so the total time ≈ duration
    const intervalMs = 10;
    const steps = Math.max(1, Math.ceil(duration / intervalMs));
    const inc = len / steps;

    setDisplayText(randomOfLength(len));

    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      iteration += inc;
      const next = text
        .split('')
        .map((ch, i) => (i < iteration ? ch : characters[(Math.random() * characters.length) | 0]))
        .join('');
      setDisplayText(next);

      if (iteration >= len) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, intervalMs);
  };

  useEffect(() => {
    // Only schedule once: either on mount (if !triggerOnScroll) or on first inView
    const shouldStart = triggerOnScroll ? inView : true;
    if (shouldStart && !playedRef.current) {
      timeoutRef.current = setTimeout(startScramble, delay);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // ⚠️ do NOT include `text` here, or it may retrigger on parent re-renders
  }, [inView, triggerOnScroll, delay]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const modeClass = mode === 'inline' ? 'scramble-inline' : 'scramble-block';

  return (
    <span
      ref={ref}
      className={`scramble-text ${modeClass} ${className} ${isAnimating ? 'animating' : ''}`}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;


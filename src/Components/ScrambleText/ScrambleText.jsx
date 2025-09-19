// // import React, { useState, useEffect, useRef } from 'react';
// // import { useInView } from 'react-intersection-observer';
// // import './ScrambleText.css';

// // const ScrambleText = ({ text, className = '', delay = 0, duration = 800, triggerOnScroll = true }) => {
// //   const [displayText, setDisplayText] = useState('');
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [hasAnimated, setHasAnimated] = useState(false);
// //   const { ref, inView } = useInView({
// //     threshold: 0.3,
// //     triggerOnce: false, // Allow re-triggering on scroll
// //   });
// //   // !@#$%^&*()_+-=[]{}|;:,.<>?
// //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// //   const intervalRef = useRef(null);

// //   const startScramble = () => {
// //     if (hasAnimated && triggerOnScroll) return; // Don't re-animate if already done and triggerOnScroll is true
    
// //     setIsAnimating(true);
// //     setDisplayText('');
// //     let iteration = 0;
// //     const maxIterations = Math.min(text.length * 2, 20); // Reduced iterations for faster animation

// //     intervalRef.current = setInterval(() => {
// //       setDisplayText(
// //         text
// //           .split('')
// //           .map((char, index) => {
// //             if (index < iteration) {
// //               return text[index];
// //             }
// //             return characters[Math.floor(Math.random() * characters.length)];
// //           })
// //           .join('')
// //       );

// //       if (iteration >= text.length) {
// //         clearInterval(intervalRef.current);
// //         setDisplayText(text);
// //         setIsAnimating(false);
// //         setHasAnimated(true);
// //       }

// //       iteration += 1 / 2; // Faster iteration
// //     }, 20); // Faster interval
// //   };

// //   useEffect(() => {
// //     if (triggerOnScroll) {
// //       if (inView && !hasAnimated) {
// //         const timer = setTimeout(() => {
// //           startScramble();
// //         }, delay);
// //         return () => clearTimeout(timer);
// //       }
// //     } else {
// //       // Original behavior for non-scroll triggered elements
// //       const timer = setTimeout(() => {
// //         startScramble();
// //       }, delay);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [inView, text, delay, triggerOnScroll, hasAnimated]);

// //   // Cleanup interval on unmount
// //   useEffect(() => {
// //     return () => {
// //       if (intervalRef.current) {
// //         clearInterval(intervalRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <span 
// //       ref={ref}
// //       className={`scramble-text ${className} ${isAnimating ? 'animating' : ''}`}
// //     >
// //       {displayText || text}
// //     </span>
// //   );
// //   // return (
// //   //   <span ref={ref} className="scramble-wrap">
// //   //     {/* Ghost: reserves final size, never changes */}
// //   //     <span className="scramble-ghost scramble-text">{text}</span>
  
// //   //     {/* Overlay: animates in place, doesn’t affect layout */}
// //   //     <span
// //   //       className={`scramble-anim scramble-text ${isAnimating ? 'animating' : ''}`}
// //   //       aria-hidden="true"
// //   //     >
// //   //       {displayText || text}
// //   //     </span>
// //   //   </span>
// //   // );
  
// // };

// // export default ScrambleText;




// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import { useInView } from 'react-intersection-observer';
// import './ScrambleText.css';

// const ScrambleText = ({
//   text,
//   className = '',
//   delay = 0,
//   duration = 800,
//   triggerOnScroll = true
// }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

//   // Only letters (as you had); monospace-safe
//   const characters = useMemo(
//     () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
//     []
//   );

//   const widthCH = useMemo(() => `${text.length}ch`, [text]); // fixed width
//   const intervalRef = useRef(null);

//   const randomOfLength = (len) =>
//     Array.from({ length: len }, () =>
//       characters[Math.floor(Math.random() * characters.length)]
//     ).join('');

//   const startScramble = () => {
//     if (hasAnimated && triggerOnScroll) return;

//     setIsAnimating(true);

//     // Start at full length so the span width is constant from frame 0
//     const len = text.length;
//     setDisplayText(randomOfLength(len));

//     let iteration = 0;
//     const step = 0.5;   // your speed
//     const intervalMs = 20;

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       const next = text
//         .split('')
//         .map((ch, i) =>
//           i < iteration ? ch : characters[Math.floor(Math.random() * characters.length)]
//         )
//         .join('');

//       setDisplayText(next);

//       if (iteration >= len) {
//         clearInterval(intervalRef.current);
//         setDisplayText(text);
//         setIsAnimating(false);
//         setHasAnimated(true);
//       }
//       iteration += step;
//     }, intervalMs);
//   };

//   useEffect(() => {
//     if (triggerOnScroll) {
//       if (inView && !hasAnimated) {
//         const timer = setTimeout(startScramble, delay);
//         return () => clearTimeout(timer);
//       }
//     } else {
//       const timer = setTimeout(startScramble, delay);
//       return () => clearTimeout(timer);
//     }
//   }, [inView, text, delay, triggerOnScroll, hasAnimated]);

//   useEffect(() => () => clearInterval(intervalRef.current), []);

//   return (
//     <span
//       ref={ref}
//       className={`scramble-text ${className} ${isAnimating ? 'animating' : ''}`}
//       style={{
//         display: 'inline-block',
//         width: widthCH,          // <<< locks width
//         whiteSpace: 'nowrap',    // <<< no wrapping
//       }}
//     >
//       {displayText}
//     </span>
//   );
// };

// export default ScrambleText;
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrambleText.css';

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


import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration) {
          // easeOutQuart
          const easeOut = 1 - Math.pow(1 - progress / duration, 4);
          const nextCount = Math.min(end, Math.floor(easeOut * end));
          setCount(nextCount);
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCounter);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, inView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Parse the numeric part, prefix, and suffix
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  
  let prefix = '';
  let suffix = '';
  
  if (numericMatch && numericMatch.index !== undefined) {
    prefix = value.substring(0, numericMatch.index);
    suffix = value.substring(numericMatch.index + numericMatch[0].length);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Disconnect after it becomes visible so it only animates once
          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || targetNumber === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate the current value based on ease-out cubic function
      const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      const currentCount = Math.floor(easeOutQuart * targetNumber);

      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetNumber, duration]);

  // If there's no number in the string, just return the original string
  if (targetNumber === 0 && !numericMatch) {
    return <span>{value}</span>;
  }

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;

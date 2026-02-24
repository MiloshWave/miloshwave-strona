import React, { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  threshold?: number;
  as?: React.ElementType;
}

const RevealOnScroll: React.FC<Props> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1000,
  direction = 'up',
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current as Element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-12 opacity-0';
        case 'down': return '-translate-y-12 opacity-0';
        case 'left': return '-translate-x-12 opacity-0';
        case 'right': return 'translate-x-12 opacity-0';
        case 'none': return 'scale-95 opacity-0';
        default: return 'translate-y-12 opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 scale-100 opacity-100';
  };

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out transform ${getTransformClass()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </Component>
  );
};

export default RevealOnScroll;
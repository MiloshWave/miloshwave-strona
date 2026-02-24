
import React, { useEffect, useState } from 'react';
import { Waves } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay at 100% before fading out
      setTimeout(() => {
        setIsVisible(false);
        // Wait for fade out transition to finish before unmounting in parent
        setTimeout(onComplete, 700); 
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center animate-pulse">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-4 rounded-full bg-primary-50 text-primary-600 shadow-sm border border-primary-100">
            <Waves size={48} strokeWidth={2.5} />
          </div>
          <span className="font-heading font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
            Milosh<span className="text-primary-600">Wave</span>
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-4 text-sm font-medium text-slate-400 font-mono">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;

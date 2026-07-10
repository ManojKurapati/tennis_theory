import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);

  // Count up from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Trigger parent layout unmount once complete
  useEffect(() => {
    if (percent >= 100) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500); // Give the user half a second to view 100% calibration
      return () => clearTimeout(timer);
    }
  }, [percent, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#020a06] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle diagnostic grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Glowing particle rings */}
      <div className="absolute w-[400px] h-[400px] bg-tennis-gold/5 rounded-full blur-3xl" />
      <div className="absolute w-[200px] h-[200px] bg-tennis-kinetic/5 rounded-full blur-2xl" />

      {/* Active loader core */}
      <div className="relative flex flex-col items-center">
        
        {/* SVG Tennis ball bouncing & spinning */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-10">
          
          {/* Bouncing ball wrapper */}
          <motion.div
            animate={{
              y: [0, -60, 0, -30, 0],
              scaleY: [1, 0.9, 1.1, 0.95, 1],
              scaleX: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: 0,
            }}
            className="w-16 h-16 relative"
          >
            {/* Rotating ball seam wrapper */}
            <motion.div
              animate={{ rotate: 720 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-full h-full rounded-full bg-[#ccff00] border-2 border-tennis-gold flex items-center justify-center shadow-lg shadow-[#ccff00]/25 relative overflow-hidden"
            >
              {/* Seams */}
              <svg className="absolute inset-0 w-full h-full text-white/80" viewBox="0 0 100 100">
                <path d="M 20 50 Q 50 20 80 50" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="2 1" />
                <path d="M 20 50 Q 50 80 80 50" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="2 1" />
              </svg>
            </motion.div>

            {/* Motion Blur Trail */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black/40 rounded-full blur-xs" />
          </motion.div>

          {/* Shockwave expander on third bounce */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 4.5], opacity: [0, 0.4, 0] }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            className="absolute w-12 h-12 border-2 border-tennis-gold rounded-full pointer-events-none"
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 3.5], opacity: [0, 0.3, 0] }}
            transition={{ delay: 1.45, duration: 0.8, ease: "easeOut" }}
            className="absolute w-12 h-12 border-2 border-tennis-kinetic rounded-full pointer-events-none"
          />
        </div>

        {/* Telemetry log titles */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5">
            <Activity className="w-4 h-4 text-tennis-gold animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-tennis-gold uppercase">
              THE TENNIS THEORY LABS
            </span>
          </div>
          
          <h3 className="text-sm font-display font-semibold tracking-wide text-tennis-cream uppercase">
            Calibrating Biomechanical Engine...
          </h3>
          
          {/* Progress Loading Bar */}
          <div className="w-48 h-1 bg-tennis-brand/20 rounded-full overflow-hidden mx-auto mt-4 border border-tennis-gold/10">
            <motion.div 
              className="h-full bg-gradient-to-r from-tennis-gold to-tennis-kinetic"
              style={{ width: `${percent}%` }}
            />
          </div>

          {/* Progress Count */}
          <div className="text-[10px] font-mono text-slate-500 mt-1">
            SYSTEM CORE STATUS: {percent}% COMPLETE_
          </div>
        </div>

      </div>
    </motion.div>
  );
}

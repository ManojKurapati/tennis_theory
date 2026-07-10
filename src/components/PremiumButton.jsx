import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PremiumButton({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = 
    variant === 'primary'
      ? 'bg-tennis-gold text-tennis-dark border-tennis-gold'
      : 'bg-tennis-deep/80 text-tennis-gold border-tennis-gold/30 hover:border-tennis-gold/80';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-6 py-3.5 rounded-xl border text-xs font-display font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md overflow-hidden ${buttonStyle} ${className}`}
      style={{
        boxShadow: isHovered 
          ? variant === 'primary' 
            ? '0 0 25px rgba(201, 162, 39, 0.45)' 
            : '0 0 20px rgba(201, 162, 39, 0.2)'
          : 'none'
      }}
    >
      {/* Background slide highlights on primary */}
      {variant === 'primary' && (
        <span 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000"
          style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }}
        />
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        
        {/* Animated Bouncing/Rotating Tennis Ball icon */}
        <motion.svg 
          className="w-3.5 h-3.5" 
          viewBox="0 0 100 100"
          animate={isHovered ? { rotate: 360, y: [0, -3, 0] } : { rotate: 0 }}
          transition={isHovered ? { 
            rotate: { duration: 0.8, ease: "easeOut" },
            y: { duration: 0.4, repeat: 1, ease: "easeInOut" }
          } : { duration: 0.2 }}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" />
          <path d="M 22 50 Q 50 22 78 50" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="5 5" />
          <path d="M 22 50 Q 50 78 78 50" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="5 5" />
        </motion.svg>
      </span>
    </motion.button>
  );
}

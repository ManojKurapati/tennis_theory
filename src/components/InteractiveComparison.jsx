import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, Activity, Cpu } from 'lucide-react';

export default function InteractiveComparison() {
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const startDrag = () => {
    isDragging.current = true;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);
    return () => {
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchend', endDrag);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-xs text-tennis-gold font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-2">
          <Activity className="w-3.5 h-3.5" /> Interactive Demonstration
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-tennis-cream">
          Raw Footage vs. Biomechanical Analytics
        </h3>
        <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          Drag the center handle to see how raw smartphone video is digitized, calibrated, and modeled into elite-level biomechanical data.
        </p>
      </div>

      {/* Main Slider Container */}
      <div 
        ref={containerRef}
        className="relative h-[380px] md:h-[450px] w-full rounded-2xl overflow-hidden border border-tennis-gold/20 select-none cursor-ew-resize glass-card"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* 1. Base Layer (Biomechanical Blueprint Analysis) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="w-full h-full relative flex items-center justify-center bg-[#01140d]/40">
            {/* HUD Scientific Indicators - ONLY visible on the analysis side */}
            <div className="absolute top-6 left-6 text-left font-mono text-[10px] text-tennis-kinetic space-y-1">
              <div>[CALIBRATION_GRID]: ESTABLISHED</div>
              <div>[HIP_ANGLE_MAX]: 148.2°</div>
              <div>[FORCE_VECTOR_Z]: 4.2 kN/m</div>
              <div>[RECOVERY_INDEX]: 94.8%</div>
            </div>

            <div className="absolute bottom-6 right-6 text-right font-mono text-[10px] text-tennis-diagnostic space-y-1">
              <div>MODELING: 3D KINETIC SPINE</div>
              <div>FRAME SYNC: 240 FPS</div>
              <div>DEVIATION RISK: MINIMAL [3%]</div>
            </div>

            {/* Glowing Biomechanical SVG Skeleton Model */}
            <svg className="w-[300px] h-[340px] text-tennis-kinetic drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]" viewBox="0 0 100 100">
              {/* Background circular radar indicators */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1" />
              
              {/* Spine / Torso lines */}
              <line x1="50" y1="45" x2="48" y2="28" stroke="#D4AF37" strokeWidth="2.5" />
              <line x1="48" y1="28" x2="46" y2="16" stroke="#D4AF37" strokeWidth="2.5" />
              
              {/* Left leg */}
              <line x1="50" y1="45" x2="44" y2="60" stroke="#00F0FF" strokeWidth="2.5" />
              <line x1="44" y1="60" x2="38" y2="85" stroke="#00F0FF" strokeWidth="2.5" />
              
              {/* Right leg */}
              <line x1="50" y1="45" x2="58" y2="60" stroke="#00F0FF" strokeWidth="2" />
              <line x1="58" y1="60" x2="65" y2="84" stroke="#00F0FF" strokeWidth="2" />
              
              {/* Shoulder girdle */}
              <line x1="48" y1="28" x2="38" y2="26" stroke="#D4AF37" strokeWidth="2" />
              <line x1="48" y1="28" x2="58" y2="30" stroke="#D4AF37" strokeWidth="2" />
              
              {/* Left Arm (non-dominant extended) */}
              <line x1="38" y1="26" x2="26" y2="34" stroke="#00DF9A" strokeWidth="2" />
              <line x1="26" y1="34" x2="16" y2="42" stroke="#00DF9A" strokeWidth="2" />
              
              {/* Right Arm (coiled racquet arm hitting forehand) */}
              <line x1="58" y1="30" x2="68" y2="38" stroke="#00DF9A" strokeWidth="3" />
              <line x1="68" y1="38" x2="82" y2="32" stroke="#00DF9A" strokeWidth="3" />
              {/* Racquet */}
              <line x1="82" y1="32" x2="94" y2="18" stroke="#D4AF37" strokeWidth="3.5" />
              <ellipse cx="94" cy="18" rx="7" ry="12" fill="none" stroke="#D4AF37" strokeWidth="1.5" transform="rotate(35, 94, 18)" />
              
              {/* Dynamic calculations overlays */}
              {/* Elbow Angle */}
              <path d="M 64 36 A 6 6 0 0 1 72 35" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
              <text x="70" y="47" fill="#00F0FF" fontSize="5" fontWeight="bold" fontFamily="monospace">134.6°</text>
              
              {/* Knee Load Angle */}
              <path d="M 46 64 A 7 7 0 0 1 40 60" fill="none" stroke="#00DF9A" strokeWidth="1.5" />
              <text x="26" y="63" fill="#00DF9A" fontSize="5" fontWeight="bold" fontFamily="monospace">LOAD: 118°</text>

              {/* Joint nodes */}
              <circle cx="46" cy="16" r="4.5" fill="#FBF9F4" /> {/* Head */}
              <circle cx="48" cy="28" r="3" fill="#D4AF37" /> {/* Neck */}
              <circle cx="50" cy="45" r="3" fill="#D4AF37" /> {/* Pelvis */}
              <circle cx="38" y1="26" r="3" fill="#00F0FF" /> {/* L-Shoulder */}
              <circle cx="58" cy="30" r="3" fill="#00F0FF" /> {/* R-Shoulder */}
              <circle cx="26" cy="34" r="3.5" fill="#00DF9A" /> {/* L-Elbow */}
              <circle cx="68" cy="38" r="3.5" fill="#00DF9A" /> {/* R-Elbow */}
              <circle cx="16" cy="42" r="3" fill="#00F0FF" /> {/* L-Wrist */}
              <circle cx="82" cy="32" r="3" fill="#00F0FF" /> {/* R-Wrist */}
              <circle cx="44" cy="60" r="3.5" fill="#00F0FF" /> {/* L-Knee */}
              <circle cx="58" cy="60" r="3.5" fill="#00F0FF" /> {/* R-Knee */}
              <circle cx="38" cy="85" r="3" fill="#00DF9A" /> {/* L-Ankle */}
              <circle cx="65" cy="84" r="3" fill="#00DF9A" /> {/* R-Ankle */}
            </svg>
            <div className="absolute top-[80px] md:top-[100px] left-[55%] font-mono text-[9px] text-tennis-cream bg-tennis-deep/80 border border-tennis-gold/30 px-2.5 py-1 rounded backdrop-blur">
              <span className="text-tennis-gold font-bold">TORQUE PROFILE:</span> 184 N·m (ACCEL)
            </div>
          </div>
        </div>

        {/* 2. Top Layer (Raw Video Footage) - Clipped dynamically by sliderPos */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="w-full h-full relative flex items-center justify-center bg-[#020d08]">
            {/* Raw Footage Overlay details */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-white/50 space-y-1">
              <div>REC: [LIVE CAMERA]</div>
              <div>ISO: 400</div>
              <div>1080p @ 60 FPS</div>
            </div>

            {/* Premium Raw Player Silhouette */}
            <svg className="w-[300px] h-[340px] text-white/10" viewBox="0 0 100 100">
              <path 
                d="M 46 12 
                   C 43 14, 42 18, 45 22 
                   C 42 24, 35 25, 28 28
                   C 22 31, 18 35, 16 40
                   C 18 43, 22 41, 26 36
                   C 30 33, 35 29, 39 28
                   C 42 32, 45 38, 48 44
                   C 42 52, 38 62, 37 72
                   C 36 78, 37 82, 38 85
                   C 41 85, 43 82, 44 76
                   C 45 68, 49 55, 51 47
                   C 54 53, 56 61, 57 70
                   C 58 76, 60 81, 65 84
                   C 68 84, 69 82, 67 78
                   C 64 70, 60 58, 57 46
                   C 61 41, 64 36, 68 34
                   C 72 32, 78 31, 82 32
                   L 84 31
                   C 82 28, 76 25, 70 26
                   C 64 27, 58 28, 56 26
                   C 54 22, 51 18, 49 14
                   Z" 
                fill="#004d33" 
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
              />
              {/* Tennis racket vector */}
              <line x1="82" y1="32" x2="94" y2="18" stroke="#fbf9f4" strokeWidth="2.5" />
              <ellipse cx="94" cy="18" rx="7" ry="12" fill="none" stroke="#fbf9f4" strokeWidth="1" transform="rotate(35, 94, 18)" />
            </svg>

            {/* Label indicating this is raw */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] tracking-wider font-semibold uppercase text-white">Raw Phone Video Input</span>
            </div>
          </div>
        </div>

        {/* 3. Slider Line Divider & Drag Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-tennis-gold z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Animated Gold Glowing pulse ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-tennis-dark border-2 border-tennis-gold shadow-md flex items-center justify-center pointer-events-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-tennis-gold" />
          </div>
        </div>

        {/* Labels at top center */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 select-none pointer-events-none">
          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-black/70 border border-white/10 text-slate-300">
            Raw Camera
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-tennis-deep/80 border border-tennis-gold/30 text-tennis-gold">
            Biometrics
          </span>
        </div>
      </div>
      
      {/* Visual checklist showing calculations in real time */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="p-4 rounded-xl border border-tennis-gold/10 bg-tennis-deep/20 flex flex-col items-center text-center">
          <Activity className="w-5 h-5 text-tennis-gold mb-1.5" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Kinetic Chain</span>
          <span className="text-sm font-semibold text-tennis-cream font-display mt-0.5">Energy Sequencing</span>
        </div>
        <div className="p-4 rounded-xl border border-tennis-gold/10 bg-tennis-deep/20 flex flex-col items-center text-center">
          <Cpu className="w-5 h-5 text-tennis-kinetic mb-1.5" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Joint Angles</span>
          <span className="text-sm font-semibold text-tennis-cream font-display mt-0.5">90-Point Vectors</span>
        </div>
        <div className="p-4 rounded-xl border border-tennis-gold/10 bg-tennis-deep/20 flex flex-col items-center text-center">
          <Sparkles className="w-5 h-5 text-tennis-diagnostic mb-1.5" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Injury Prevention</span>
          <span className="text-sm font-semibold text-tennis-cream font-display mt-0.5">Strain Load Index</span>
        </div>
        <div className="p-4 rounded-xl border border-tennis-gold/10 bg-tennis-deep/20 flex flex-col items-center text-center">
          <Activity className="w-5 h-5 text-tennis-gold mb-1.5" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Power Output</span>
          <span className="text-sm font-semibold text-tennis-cream font-display mt-0.5">Torque Analytics</span>
        </div>
      </div>
    </div>
  );
}

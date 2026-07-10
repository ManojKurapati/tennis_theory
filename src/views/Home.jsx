import React, { useState } from 'react';
import { Sparkles, Send, ChevronLeft, ChevronRight, Check, Activity, Award, Star, Mail } from 'lucide-react';
import BiomechanicalHeroCanvas from '../components/BiomechanicalHeroCanvas';
import InteractiveComparison from '../components/InteractiveComparison';
import PremiumButton from '../components/PremiumButton';
import { motion } from 'framer-motion';

export default function Home({ setPage }) {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [testiIndex, setTestiIndex] = useState(0);

  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      name: "ARJUN M.",
      title: "NATIONAL JUNIOR (TOP 10 RANK)",
      quote: "The 90-Point Biomechanical report completely rebuilt my forehand topspin. Hans identified a hip rotation lag that was capping my power. After implementing the corrective drills, my average racquet speed increased by 9 MPH in just 6 weeks.",
      tags: ["FOREHAND KINEMATICS", "ROTATIONAL ACCELERATION"]
    },
    {
      name: "COACH RAJESH K.",
      title: "ELITE ACADEMY DIRECTOR & EX-DAVIS CUP",
      quote: "We integrate The Tennis Theory diagnostics for all our tournament-prep juniors. The ability to overlay our players' motion alongside professional velocity models has accelerated stroke correction tenfold. It’s coaching engineered with absolute data.",
      tags: ["KINETIC TRANSFER", "JOINT OVERLOAD PREDICTION"]
    },
    {
      name: "SARAH JENKINS",
      title: "COMPETITIVE AMATEUR & CLUB CHAMP",
      quote: "I was struggling with chronic tennis elbow for two years. Hans' analysis pinpointed that my wrist was snapping too early in the backhand acceleration phase. Adjusting my forearm angles completely cured my pain.",
      tags: ["INJURY DIAGNOSTICS", "WRIST LAG CALIBRATION"]
    }
  ];

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCallbackName('');
      setCallbackPhone('');
      alert("Thank you. Hans or our diagnostics team will call you back within 24 hours.");
    }, 1000);
  };

  const handleNextTesti = () => {
    setTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTesti = () => {
    setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTesti = testimonials[testiIndex];

  return (
    <div className="w-full bg-[#020a06]">
      
      {/* 1. HERO SECTION WITH CINEMATIC ZOOM & FINE GRID */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        
        {/* Parallax Widescreen breathing scale */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000')] bg-cover bg-center opacity-[0.04] mix-blend-overlay cinematic-zoom" 
          />
        </div>
        
        {/* Biomechanical Telemetry Canvas */}
        <BiomechanicalHeroCanvas />

        {/* Foreground Content */}
        <div className="container mx-auto px-8 md:px-12 relative z-10 grid md:grid-cols-12 gap-12 pointer-events-none">
          <div className="md:col-span-8 flex flex-col justify-center text-left space-y-10 select-none">
            
            {/* Tagline label */}
            <div className="inline-flex items-center gap-2 border-luxury bg-[#002B1A]/80 backdrop-blur px-4 py-1.5 rounded-full w-fit">
              <Activity className="w-3 h-3 text-tennis-gold animate-pulse" />
              <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-tennis-gold uppercase">
                TENNIS THEORY LABS • MOVEMENT ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-display font-light leading-none text-white tracking-tight space-y-1">
                <span className="font-extralight block text-slate-300">UNLOCK THE SCIENCE</span>
                <span className="text-gold-luxury font-medium block">BEHIND THE SWING</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed font-sans font-light tracking-widest uppercase">
              We translate smartphone footage into skeletal coordinate maps. Calibrate angles, synchronize kinetic sequencing, and maximize torque.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 pointer-events-auto">
              <PremiumButton onClick={() => setPage('services')}>
                Upload Stroke
              </PremiumButton>
              <PremiumButton onClick={() => setPage('about')} variant="secondary">
                Hans Credentials
              </PremiumButton>
            </div>
          </div>
        </div>

        {/* Scanning Line overlay */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-tennis-gold/10 scanning-line pointer-events-none" />
      </section>

      {/* 2. STATS BAR (Sunset clay-court background with thin borders) */}
      <section className="border-y border-luxury bg-[#00170f]/90 backdrop-blur-md py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2000')]" />
        
        <div className="container mx-auto px-8 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div className="text-center">
            <span className="block text-4xl md:text-6xl font-display font-light text-gold-luxury">500+</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mt-3">ATHLETES MAPPED</span>
          </div>
          <div className="text-center border-l border-luxury">
            <span className="block text-4xl md:text-6xl font-display font-light text-tennis-kinetic">15%+</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mt-3">VELOCITY BOOST</span>
          </div>
          <div className="text-center border-l border-luxury">
            <span className="block text-4xl md:text-6xl font-display font-light text-tennis-diagnostic">78%</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mt-3">STRAIN DEVIATION RISK REDUCTION</span>
          </div>
          <div className="text-center border-l border-luxury">
            <span className="block text-4xl md:text-6xl font-display font-light text-tennis-cream">4.9★</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mt-3">COACH EVALUATION STANDARD</span>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Horizontal row with fine borders, watch-catalog style) */}
      <section className="py-32 bg-tennis-dark bg-grid-pattern relative">
        <div className="container mx-auto px-8 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3">SYSTEMATIC PERFORMANCE CHECK</span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-tennis-cream leading-tight">
              Biomechanical Evaluation Sequence
            </h2>
            <div className="w-16 h-[0.5px] bg-tennis-gold mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-4 border-luxury rounded-2xl overflow-hidden bg-tennis-deep/10 backdrop-blur-xs">
            
            {/* Step 1 */}
            <div 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 relative border-luxury overflow-hidden group transition-all duration-500 hover:bg-[#002B1A]/20 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <span className="absolute top-6 right-8 font-display text-3xl font-extralight text-tennis-gold/10 group-hover:text-tennis-gold/25 transition-colors">01</span>
                
                {/* Custom animated swing path vector */}
                <div className="w-full h-24 mb-6 flex items-center justify-center relative">
                  <svg className="w-full h-full text-tennis-gold opacity-50" viewBox="0 0 100 60">
                    <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(201,162,39,0.06)" strokeWidth="0.5" />
                    
                    <motion.path 
                      d="M 10 45 Q 50 10 90 45" 
                      fill="none" 
                      stroke="#C9A227" 
                      strokeWidth="1.5"
                      animate={hoveredCard === 1 ? { strokeDashoffset: 0 } : { strokeDashoffset: 100 }}
                      initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    
                    <motion.circle 
                      cx="90" cy="45" r="3" 
                      fill="#00F0FF" 
                      animate={hoveredCard === 1 ? { scale: [1, 1.4, 1], opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.75, duration: 0.3 }}
                    />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-slate-500 tracking-wider">[COILING VECTOR]</span>
                </div>

                <h4 className="font-display font-semibold text-sm tracking-luxury uppercase text-tennis-cream">Upload Stroke</h4>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed font-sans font-light tracking-wide">
                  Record your stroke (serve or groundstrokes) in slow motion at 60/120fps from clear perpendicular angles and upload securely.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 relative border-t md:border-t-0 md:border-l border-luxury overflow-hidden group transition-all duration-500 hover:bg-[#002B1A]/20 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <span className="absolute top-6 right-8 font-display text-3xl font-extralight text-tennis-gold/10 group-hover:text-tennis-gold/25 transition-colors">02</span>
                
                {/* Custom animated joints overlay */}
                <div className="w-full h-24 mb-6 flex items-center justify-center relative">
                  <svg className="w-full h-full text-tennis-kinetic" viewBox="0 0 100 60">
                    <line x1="20" y1="45" x2="50" y2="25" stroke="#00F0FF" strokeWidth="1.5" />
                    <line x1="50" y1="25" x2="80" y2="15" stroke="#00F0FF" strokeWidth="1" />
                    
                    <motion.circle 
                      cx="20" cy="45" r="3.5" fill="#C9A227"
                      animate={hoveredCard === 2 ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    />
                    <motion.circle 
                      cx="50" cy="25" r="4" fill="#00DF9A"
                      animate={hoveredCard === 2 ? { scale: [1, 1.4, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                    />
                    <motion.circle 
                      cx="80" cy="15" r="3.5" fill="#C9A227"
                      animate={hoveredCard === 2 ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }}
                    />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-slate-500 tracking-wider">[JOINT TELEMETRY]</span>
                </div>

                <h4 className="font-display font-semibold text-sm tracking-luxury uppercase text-tennis-cream">Skeletal Calibration</h4>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed font-sans font-light tracking-wide">
                  Hans tracks your anatomical landmarks using motion software, analyzing joint flexion and acceleration pathways.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 relative border-t md:border-t-0 md:border-l border-luxury overflow-hidden group transition-all duration-500 hover:bg-[#002B1A]/20 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <span className="absolute top-6 right-8 font-display text-3xl font-extralight text-tennis-gold/10 group-hover:text-tennis-gold/25 transition-colors">03</span>
                
                {/* Angle calibration sweep */}
                <div className="w-full h-24 mb-6 flex items-center justify-center relative">
                  <svg className="w-full h-full text-tennis-gold" viewBox="0 0 100 60">
                    <line x1="30" y1="45" x2="60" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <line x1="30" y1="45" x2="70" y2="15" stroke="#C9A227" strokeWidth="1.5" />
                    
                    <motion.path 
                      d="M 50 45 A 20 20 0 0 0 58 24" 
                      fill="none" 
                      stroke="#00F0FF" 
                      strokeWidth="1.5"
                      animate={hoveredCard === 3 ? { strokeDashoffset: 0 } : { strokeDashoffset: 40 }}
                      initial={{ strokeDasharray: 40, strokeDashoffset: 40 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <text x="65" y="38" fill="#00F0FF" fontSize="7" fontFamily="monospace" fontWeight="bold">126°</text>
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-slate-500 tracking-wider">[ANGLE CALIBRATION]</span>
                </div>

                <h4 className="font-display font-semibold text-sm tracking-luxury uppercase text-tennis-cream">90-Point Dashboard</h4>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed font-sans font-light tracking-wide">
                  Get your diagnostic charts measuring torque outputs, timing margins, and skeletal comparison coefficients.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 relative border-t md:border-t-0 md:border-l border-luxury overflow-hidden group transition-all duration-500 hover:bg-[#002B1A]/20 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <span className="absolute top-6 right-8 font-display text-3xl font-extralight text-tennis-gold/10 group-hover:text-tennis-gold/25 transition-colors">04</span>
                
                {/* Spiral kinetic loop */}
                <div className="w-full h-24 mb-6 flex items-center justify-center relative">
                  <svg className="w-full h-full text-tennis-diagnostic" viewBox="0 0 100 60">
                    <motion.path 
                      d="M 10 30 C 30 10, 30 50, 50 30 C 70 10, 70 50, 90 30" 
                      fill="none" 
                      stroke="#00DF9A" 
                      strokeWidth="2"
                      animate={hoveredCard === 4 ? { strokeDashoffset: 0 } : { strokeDashoffset: 120 }}
                      initial={{ strokeDasharray: 120, strokeDashoffset: 120 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-slate-500 tracking-wider">[MUSCLE PATTERNING]</span>
                </div>

                <h4 className="font-display font-semibold text-sm tracking-luxury uppercase text-tennis-cream">Engineered Correction</h4>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed font-sans font-light tracking-wide">
                  Train using target physical exercises prescribed by Hans to correct mechanical failures and secure muscle memory.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SCIENTIFIC SLIDER COMPARISON SECTION */}
      <section className="py-32 bg-gradient-to-b from-[#020a06] to-[#002B1A] border-t border-luxury">
        <div className="container mx-auto px-8 md:px-12">
          <InteractiveComparison />
        </div>
      </section>

      {/* 5. 90-POINT DIAGNOSTIC ANNOUNCEMENT */}
      <section className="py-32 bg-tennis-dark relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-tennis-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-8 md:px-12 max-w-4xl relative z-10">
          <div className="glass-card rounded-3xl border border-tennis-gold/25 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 clay-court-overlay opacity-25 pointer-events-none" />

            <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3 text-center">
              Laboratory Diagnostics Suite
            </span>
            
            <h3 className="text-3xl md:text-5xl font-display font-light text-tennis-cream text-center mb-10 tracking-wide">
              The Signature <span className="text-gold-luxury">90-Point</span> Analysis
            </h3>
            
            <p className="text-xs md:text-sm text-slate-400 text-center leading-relaxed max-w-2xl mx-auto mb-14 font-sans font-light tracking-wide">
              Hans' advanced evaluation measures coordinates across your entire frame: stance coiling, knee deflection load, pelvic rotation separation, upper/lower spinal tilts, elbow angles, wrist release offsets, and follow-through trajectories.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
              <div className="flex items-start gap-4 bg-[#020d08]/85 border-luxury p-6 rounded-2xl backdrop-blur">
                <Check className="w-4 h-4 text-tennis-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-tennis-cream text-xs tracking-luxury uppercase">Full Frame Calibration</span>
                  <span className="block text-[11px] text-slate-400 mt-2 leading-relaxed font-light">
                    Skeletal angle metrics mapped through stance loading, release, and follow-through.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#020d08]/85 border-luxury p-6 rounded-2xl backdrop-blur">
                <Check className="w-4 h-4 text-tennis-kinetic shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-tennis-cream text-xs tracking-luxury uppercase">Kinetic Sequencing Values</span>
                  <span className="block text-[11px] text-slate-400 mt-2 leading-relaxed font-light">
                    Measure the millisecond timing delay of forces moving from your feet up to the hand.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#020d08]/85 border-luxury p-6 rounded-2xl backdrop-blur">
                <Check className="w-4 h-4 text-tennis-diagnostic shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-tennis-cream text-xs tracking-luxury uppercase">Strain Overload Mapping</span>
                  <span className="block text-[11px] text-slate-400 mt-2 leading-relaxed font-light">
                    Pinpoint extreme joint deflection offsets before they translate to chronic tendon soreness.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#020d08]/85 border-luxury p-6 rounded-2xl backdrop-blur">
                <Check className="w-4 h-4 text-tennis-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-tennis-cream text-xs tracking-luxury uppercase">Professional Benchmarking</span>
                  <span className="block text-[11px] text-slate-400 mt-2 leading-relaxed font-light">
                    Overlay your skeleton tracking side-by-side with professional baseline telemetry profiles.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <PremiumButton onClick={() => setPage('services')}>
                Explore Diagnostics Program
              </PremiumButton>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER (Louis Vuitton centered citation style) */}
      <section className="py-32 bg-gradient-to-b from-[#020a06] to-[#001c11] border-t border-luxury">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl text-center">
          
          <div className="mb-16">
            <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3">CLIENT VERIFICATIONS</span>
            <h2 className="text-3xl font-display font-light text-tennis-cream">Elite Success</h2>
          </div>

          <div className="relative py-8 px-6">
            {/* Elegant luxury large quote marks */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 font-display text-7xl font-extralight text-tennis-gold/15 select-none">“</span>
            
            <p className="text-base md:text-2xl text-slate-300 leading-relaxed font-display font-light italic max-w-2xl mx-auto">
              {currentTesti.quote}
            </p>
            
            <div className="mt-10 space-y-2">
              <span className="block text-sm font-display font-bold text-tennis-cream tracking-luxury">{currentTesti.name}</span>
              <span className="block text-[10px] text-tennis-gold font-mono tracking-widest uppercase">{currentTesti.title}</span>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {currentTesti.tags.map((tag, idx) => (
                <span key={idx} className="text-[9px] font-mono border-luxury bg-tennis-gold/5 text-tennis-gold px-3 py-1 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={handlePrevTesti}
                className="w-10 h-10 rounded-full border border-tennis-gold/30 hover:border-tennis-gold/80 text-tennis-gold flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextTesti}
                className="w-10 h-10 rounded-full border border-tennis-gold/30 hover:border-tennis-gold/80 text-tennis-gold flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GET A CALLBACK FORM & NEWSLETTER */}
      <section className="py-32 bg-tennis-dark bg-grid-pattern border-t border-luxury">
        <div className="container mx-auto px-8 md:px-12 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            {/* Form */}
            <div className="md:col-span-6 glass-card rounded-3xl border border-tennis-gold/25 p-8 md:p-10 relative">
              <div className="absolute inset-0 clay-court-overlay opacity-25 pointer-events-none" />
              
              <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-2">Request Consultation</span>
              <h4 className="text-2xl font-display font-light text-tennis-cream mb-6">Schedule Callback</h4>
              
              <form onSubmit={handleCallbackSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mb-2">Athlete Name</label>
                  <input 
                    type="text" 
                    required
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Arjun Prasad"
                    className="w-full bg-tennis-dark/95 border border-tennis-gold/20 hover:border-tennis-gold/45 focus:border-tennis-gold rounded-xl px-4 py-3.5 text-xs text-tennis-cream outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-ultra mb-2">Contact Number</label>
                  <input 
                    type="tel" 
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="+91 98765-43210"
                    className="w-full bg-tennis-dark/95 border border-tennis-gold/20 hover:border-tennis-gold/45 focus:border-tennis-gold rounded-xl px-4 py-3.5 text-xs text-tennis-cream outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <PremiumButton type="submit" className="w-full py-4">
                    Send Callback Request
                  </PremiumButton>
                </div>
              </form>
            </div>

            {/* Newsletter Info */}
            <div className="md:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 border border-tennis-kinetic/30 bg-[#002B1A]/40 px-4 py-1.5 rounded-full w-fit">
                <Mail className="w-3.5 h-3.5 text-tennis-kinetic" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-tennis-kinetic uppercase">
                  Biomechanical Bulletin
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-light text-tennis-cream leading-tight tracking-wide">
                Receive Performance <span className="text-gold-luxury">Briefings</span>
              </h3>
              
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans font-light tracking-widest uppercase">
                Subscribe to receive case studies on ATP/WTA stroke dynamics and strain relief physical routines.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="your.email@domain.com"
                  className="flex-1 bg-[#002B1A]/30 border border-tennis-gold/20 hover:border-tennis-gold/40 focus:border-tennis-gold rounded-xl px-4 py-3 text-xs text-tennis-cream outline-none transition-colors"
                />
                <button 
                  onClick={() => alert("Subscribed! Thank you for joining our biomechanics briefing.")}
                  className="px-6 py-3.5 rounded-xl bg-tennis-deep hover:bg-tennis-medium border border-tennis-gold/30 hover:border-tennis-gold text-tennis-gold text-[10px] font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

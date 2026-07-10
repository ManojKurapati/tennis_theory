import React from 'react';
import ExpandableAnalysisGrid from '../components/ExpandableAnalysisGrid';
import UploadAnalyzerDemo from '../components/UploadAnalyzerDemo';
import PremiumButton from '../components/PremiumButton';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export default function Services() {
  
  const faqList = [
    {
      q: "How should I record my tennis stroke video?",
      a: "Record in 60fps or 120fps (slow motion) on your smartphone. Set up the camera at hip height, 15 feet away. For forehands/backhands, record from the side (perpendicular to stroke path) and from behind. For serves, record from the side and back of the court."
    },
    {
      q: "What is included in the 90-Point Report?",
      a: "You receive a detailed PDF containing joint angle metrics at key milestones (stance, backswing, contact, release), a frame-by-frame analysis overlay, kinetic sequence timelines, injury risk warning indicators, and custom corrective video drills."
    },
    {
      q: "How long does the professional analysis take?",
      a: "Standard delivery is 3 to 5 business days from video upload. We also offer an express 48-hour turn-around for players competing in upcoming tournaments."
    }
  ];

  return (
    <div className="w-full pt-40 pb-32 bg-tennis-dark bg-grid-pattern min-h-screen">
      <div className="container mx-auto px-8 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3 font-mono">Precision Sports Diagnostics</span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-tennis-cream mt-2 leading-tight tracking-wide">
            Biomechanical Diagnostics Services
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-3 max-w-xl mx-auto font-sans font-light tracking-wide">
            Review detailed breakdowns of our 90-Point Diagnostics framework and upload your video to start your movement correction journey.
          </p>
          <div className="w-16 h-[0.5px] bg-tennis-gold mx-auto mt-4" />
        </div>

        {/* 1. Expandable Services Grid Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-display font-light text-tennis-cream uppercase tracking-wide">
              The 90-Point Diagnostics Framework
            </h3>
            <p className="text-xs text-slate-500 mt-1">Select a core biomechanical discipline to inspect our evaluation metrics.</p>
          </div>
          <ExpandableAnalysisGrid />
        </div>

        {/* 2. Video Upload Portal Simulation */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-display font-light text-tennis-cream uppercase tracking-wide">
              Simulated Analysis Portal
            </h3>
            <p className="text-xs text-slate-500 mt-1">Test out the diagnostics platform by running our demo analyzer tool below.</p>
          </div>
          <UploadAnalyzerDemo />
        </div>

        {/* 3. Booking Packages Grid (Porsche-style configurator listings) */}
        <div className="mb-32 border-t border-luxury pt-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-tennis-gold uppercase tracking-ultra block mb-2">DIAGNOSTIC BUNDLES</span>
            <h3 className="text-3xl font-display font-light text-tennis-cream tracking-wide">Select Program Configuration</h3>
            <p className="text-xs text-slate-500 mt-1 font-light font-sans">Lab-grade movement analysis structured for every competitive level.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Standard Package */}
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-tennis-gold/15 flex flex-col justify-between relative group hover:border-tennis-gold/45 transition-colors">
              <div className="space-y-6">
                <span className="text-[9px] font-mono bg-tennis-deep border-luxury text-tennis-gold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                  SINGLE STROKE CONFIGURATION
                </span>
                <h4 className="text-xl font-display font-light tracking-wide text-tennis-cream uppercase">Single-Stroke Diagnostic</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans font-light tracking-wide">
                  Deep-dive analysis of a single stroke (e.g., Serve ONLY or Forehand ONLY). Ideal for fixing a persistent error.
                </p>
                <ul className="space-y-4.5 pt-4 border-t border-luxury">
                  <li className="text-xs text-slate-300 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-gold" />
                    Complete 30-point skeletal check
                  </li>
                  <li className="text-xs text-slate-300 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-gold" />
                    Power transfer timing check
                  </li>
                  <li className="text-xs text-slate-300 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-gold" />
                    3 Custom corrective drills from Hans
                  </li>
                </ul>
              </div>
              
              <div className="pt-8">
                <PremiumButton 
                  onClick={() => {
                    const text = encodeURIComponent("Hi Hans, I want to book a Single-Stroke Biomechanical Diagnostic. Please guide me on next steps.");
                    window.open(`https://wa.me/917330712779?text=${text}`, '_blank');
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Configure via WhatsApp
                </PremiumButton>
              </div>
            </div>

            {/* Premium Package */}
            <div className="glass-card rounded-2xl p-8 md:p-10 border-2 border-tennis-gold/45 bg-[#002B1A]/20 flex flex-col justify-between relative shadow-lg shadow-tennis-gold/5">
              <div className="absolute -top-3.5 left-8 bg-tennis-gold text-tennis-dark px-4 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono">
                LAB STANDARD
              </div>
              <div className="space-y-6 pt-2">
                <span className="text-[9px] font-mono bg-tennis-gold/10 border border-tennis-gold/30 text-tennis-gold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                  FULL SYSTEM PROGRAM
                </span>
                <h4 className="text-xl font-display font-light tracking-wide text-tennis-cream uppercase">Complete 90-Point Analysis</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light tracking-wide">
                  Comprehensive review of your complete game: serve, forehand, backhand, and footwork movement.
                </p>
                <ul className="space-y-4.5 pt-4 border-t border-luxury">
                  <li className="text-xs text-slate-200 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-kinetic" />
                    Complete 90-point skeletal & joint rotation check
                  </li>
                  <li className="text-xs text-slate-200 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-kinetic" />
                    Power transfer timing check
                  </li>
                  <li className="text-xs text-slate-200 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-kinetic" />
                    Injury risk & joint strain check
                  </li>
                  <li className="text-xs text-slate-200 flex items-center gap-3 font-light tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-tennis-kinetic" />
                    Side-by-side video overlays next to pro players
                  </li>
                </ul>
              </div>
              
              <div className="pt-8">
                <PremiumButton 
                  onClick={() => {
                    const text = encodeURIComponent("Hi Hans, I want to book the Complete 90-Point Analysis package. Let me know what video footage you need.");
                    window.open(`https://wa.me/917330712779?text=${text}`, '_blank');
                  }}
                  className="w-full"
                >
                  Configure Complete Program
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FAQ SECTION */}
        <div className="max-w-3xl mx-auto border-t border-luxury pt-24">
          <div className="text-center mb-14">
            <h3 className="text-2xl font-display font-light text-tennis-cream flex items-center justify-center gap-2 uppercase tracking-wide">
              <HelpCircle className="w-5.5 h-5.5 text-tennis-gold" /> Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-[#002B1A]/20 border-luxury p-6 rounded-xl">
                <span className="block font-display font-semibold text-sm text-tennis-cream tracking-wide">{faq.q}</span>
                <span className="block text-xs text-slate-450 mt-2.5 leading-relaxed font-sans font-light tracking-wide">{faq.a}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

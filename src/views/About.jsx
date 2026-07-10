import React from 'react';
import { Award, GraduationCap, Trophy, ShieldCheck, Sparkles } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

export default function About() {
  const credentials = [
    {
      category: "ACADEMIC FOUNDATIONS",
      icon: GraduationCap,
      color: "text-tennis-gold",
      items: [
        "B.S. in Biomedical Engineering (Biomechanics Specialization, University of Texas)",
        "Certified Kinesiologist & Movement Analyst",
        "Sports Nutritionist & Human Performance Specialist",
        "Expert in Kinetic Chain Dynamics & Torque Vectors"
      ]
    },
    {
      category: "ATHLETIC & COACHING",
      icon: Trophy,
      color: "text-tennis-kinetic",
      items: [
        "USPTA Elite Certified Professional Coach",
        "20+ Years Active Competitive Tennis Background",
        "12+ Years Specialized Biomechanical Analytics Experience",
        "Trainer to ITF Juniors, Collegiate Champions, and ATP/WTA Contenders"
      ]
    },
    {
      category: "INNOVATION & PATENTS",
      icon: Award,
      color: "text-tennis-diagnostic",
      items: [
        "Patent Holder of the Advanced Tennis Rebounder Training Apparatus",
        "Developer of the 90-Point Joint Deflection Calibration Standard",
        "Creator of Segmental Sequencing Training Methodology"
      ]
    }
  ];

  return (
    <div className="w-full pt-40 pb-32 bg-tennis-dark bg-grid-pattern min-h-screen">
      <div className="container mx-auto px-8 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3">THE SCIENCE BEHIND THE COACH</span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-tennis-cream mt-2 leading-tight tracking-wide">
            We Don't Just Coach.<br />
            <span className="text-gold-luxury font-medium">We Engineer Performance.</span>
          </h2>
          <div className="w-16 h-[0.5px] bg-tennis-gold mx-auto mt-4" />
        </div>

        {/* Narrative columns */}
        <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
          {/* Visual card */}
          <div className="md:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 border-luxury relative z-10">
              <div className="aspect-[4/5] rounded-xl bg-tennis-deep border-luxury flex flex-col justify-end p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Glowing target overlays */}
                <div className="absolute top-[30%] left-[45%] w-6 h-6 border border-dashed border-tennis-kinetic/30 rounded-full animate-spin pointer-events-none" />
                <div className="absolute top-[30%] left-[45%] w-1.5 h-1.5 bg-tennis-kinetic rounded-full pointer-events-none" />
                
                <div className="absolute bottom-[20%] right-[30%] w-6 h-6 border border-dashed border-tennis-gold/30 rounded-full animate-spin pointer-events-none" />
                <div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 bg-tennis-gold rounded-full pointer-events-none" />
                
                <div className="relative z-10 bg-tennis-dark/95 border-luxury p-4 rounded-lg backdrop-blur">
                  <span className="block text-xs font-bold text-tennis-gold font-display uppercase tracking-luxury">HANS G.</span>
                  <span className="block text-[8px] font-mono text-slate-500 tracking-wider">Founder, The Tennis Theory</span>
                  <span className="block text-[8px] font-mono text-tennis-kinetic mt-1 tracking-wider">Biomedical Engineer / USPTA Coach</span>
                </div>
              </div>
            </div>
            {/* Glowing accent border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-tennis-gold to-tennis-kinetic rounded-2xl opacity-10 blur-xl z-0" />
          </div>

          {/* Biography text */}
          <div className="md:col-span-7 space-y-8">
            <h3 className="text-xl md:text-2xl font-display font-light text-tennis-cream flex items-center gap-2 tracking-wide uppercase">
              <Sparkles className="w-5 h-5 text-tennis-gold" /> Founder Narrative
            </h3>
            
            <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-light tracking-wide">
              Founded by Hans, a pro-level tennis player, USPTA Certified Elite Coach, and Biomedical Engineer, **The Tennis Theory** represents the perfect intersection of athletic instinct and biomechanical science.
            </p>

            <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-light tracking-wide">
              While training at the University of Texas, Hans noticed a major gap in player development: coaching was heavily reliant on subjective visual feedback and general cues. Important adjustments to kinetic chain loading or joint stress were completely invisible to the naked eye.
            </p>

            <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-light tracking-wide">
              Combining his engineering background with over a decade of elite player coaching, Hans engineered the **90-Point Biomechanical Diagnostics System**. This system translates video kinematics into coordinates, identifying minor errors in stance, rotation, and swing paths that restrict performance or cause chronic injuries.
            </p>

            {/* Quote Block */}
            <div className="border-l border-tennis-gold pl-5 py-2 italic font-sans text-xs md:text-sm text-slate-400 bg-[#002B1A]/20 backdrop-blur tracking-wide">
              "We decode the movement patterns of the human skeleton on the court. Every swing has a mathematical baseline; we find yours and optimize it."
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-light text-tennis-cream tracking-wide">Academic & Athletic Credentials</h3>
            <p className="text-xs text-slate-500 mt-1">Our credentials represent verified competence across movement analysis and performance planning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 md:p-8 border border-tennis-gold/10 flex flex-col justify-between hover:border-tennis-gold/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 border-b border-tennis-gold/10 pb-4 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-tennis-deep flex items-center justify-center border-luxury">
                        <Icon className={`w-4 h-4 ${cred.color}`} />
                      </div>
                      <h4 className="font-display font-semibold text-xs tracking-luxury text-tennis-cream">{cred.category}</h4>
                    </div>
                    <ul className="space-y-3.5">
                      {cred.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-[11px] text-slate-400 leading-relaxed font-sans flex items-start gap-2 font-light tracking-wide">
                          <span className="text-tennis-gold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision / Mission statement */}
        <div className="glass-card rounded-3xl border border-tennis-gold/25 p-8 md:p-16 relative text-center overflow-hidden">
          <div className="absolute inset-0 clay-court-overlay opacity-25 pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <ShieldCheck className="w-9 h-9 text-tennis-gold mx-auto" />
            <h3 className="text-2xl font-display font-light text-tennis-cream tracking-wide">Our Core Mission</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-light tracking-wide">
              "To make professional, lab-grade biomechanical diagnostics accessible to competitive juniors, coaches, and active amateurs. We eliminate the guesswork from training, helping athletes hit harder, run faster, and play pain-free."
            </p>
            <div className="flex justify-center pt-4">
              <PremiumButton 
                onClick={() => {
                  const text = encodeURIComponent("Hi Hans, I read your credentials on the About page and would like to consult about my stroke biomechanics.");
                  window.open(`https://wa.me/917330712779?text=${text}`, '_blank');
                }}
              >
                Consult With Hans
              </PremiumButton>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronDown, Activity, Settings2, Target, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableAnalysisGrid() {
  const [activeTab, setActiveTab] = useState('kinetics');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tabs = [
    { id: 'kinetics', label: 'Swing Mechanics', icon: Activity },
    { id: 'analytical', label: 'Body Alignment', icon: Settings2 },
    { id: 'diagnostics', label: 'Visual Diagnostics', icon: Target },
  ];

  const data = {
    kinetics: [
      {
        title: "Feet Placement & Stance Coil",
        description: "Checking your stance width, foot angles relative to the baseline, and knee bend. Setting your feet correctly gives you a solid base to push off and hit a powerful stroke.",
        checkpoints: ["Stance width", "Back-foot weight loading", "Pushing up into the ball"],
        metric: "Knee loading bend range: 110° - 130°"
      },
      {
        title: "Racquet Path & Swing Path",
        description: "Tracing your racquet path from preparation, drop, acceleration, to ball contact. We clean up extra swing loops so your swing is clean, repeatable, and hits the sweet spot every time.",
        checkpoints: ["Clean swing plane", "Contact point coordinates", "Follow-through finish"],
        metric: "Swing path efficiency: >94%"
      },
      {
        title: "Balance & Core Stability",
        description: "Tracking how balanced you remain throughout your turn. Keeping your head still and your torso stable ensures your shots land deep with pinpoint accuracy.",
        checkpoints: ["Head alignment at contact", "Hip stability", "Post-hit balance check"],
        metric: "Balance drift offset: <1.5 inches"
      },
      {
        title: "Legs-to-Hand Power Transfer",
        description: "Measuring the timing of energy moving from your legs, to your hips, through your core, and into your wrist. Proper timing adds effortless speed to the ball.",
        checkpoints: ["Leg drive timing", "Hip turn acceleration", "Arm extension sequence"],
        metric: "Deceleration transition delay: 0.04s - 0.08s"
      }
    ],
    analytical: [
      {
        title: "Body Angles & Joint Spacing",
        description: "Precise measurements of your elbow extension, shoulder rotation, knee bend, and hip tilt during your hit. Perfect for finding small setup errors.",
        checkpoints: ["Elbow angle at contact", "Shoulder stretch range", "Knee bend compression"],
        metric: "Shoulder rotation velocity: 400°/sec+"
      },
      {
        title: "Spine Angle & Torso Rotation",
        description: "Checking your spine angle and core rotation during the swing. Keeping your back upright prevents injury and helps you rotate your body faster.",
        checkpoints: ["Spine angle at loading", "Side-to-side torso lean", "Hip-to-shoulder separation turn"],
        metric: "Spine angle deflection: <8°"
      },
      {
        title: "Footwork Width & Recovery Speed",
        description: "Checking how wide you set your feet and shift your weight on the run. A wide, balanced stance lets you hit hard and recover back to the center of the court instantly.",
        checkpoints: ["Stance width on the run", "Weight transfer timeline", "First-step recovery speed"],
        metric: "Stance-to-Height ratio: 0.70 - 0.85"
      },
      {
        title: "Body Rotation & Torso Leverage",
        description: "Checking how well you use your body rotation as a lever to swing faster with less muscle effort.",
        checkpoints: ["Shoulder-to-wrist leverage", "Hip rotation speeds", "Braking control after hit"],
        metric: "Hip turn speed: 520°/sec"
      }
    ],
    diagnostics: [
      {
        title: "15 Key Performance Scores",
        description: "A detailed review scorecard checking your swing metrics against target ranges compiled from elite junior and professional players.",
        checkpoints: ["Leg drive power score", "Racquet-ball contact time", "Stance release timing"],
        metric: "Stroke consistency score: >90"
      },
      {
        title: "Injury Risk Assessment",
        description: "Pinpointing movements or joint angles that put bad stress on your body—such as hitting late or snapping your wrist early—that lead to Tennis Elbow or Rotator Cuff strains.",
        checkpoints: ["Elbow stress markers", "Shoulder braking strain", "Ankle loading impact profile"],
        metric: "Joint overload risk: <15%"
      },
      {
        title: "Pro Player Side-by-Side Comparison",
        description: "Overlaying your skeletal outline directly next to professional templates (like Federer's forehand or Djokovic's backhand) to visually spot mechanical gaps.",
        checkpoints: ["Swing timing overlay", "Joint path matching", "Angle difference metrics"],
        metric: "Pro swing match score: >85%"
      },
      {
        title: "Custom Drills & Corrective Exercises",
        description: "A set of simple, personalized court drills and recovery exercises designed to replace bad habits with clean, efficient movement.",
        checkpoints: ["Corrective court drills", "Joint angle target fixes", "Slow-to-fast drill progression"],
        metric: "Habit adoption cycle: 14 - 21 days"
      }
    ]
  };

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const activeItems = data[activeTab];

  return (
    <div className="w-full">
      {/* Navigation tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-tennis-gold/10 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedIndex(null);
              }}
              className={`px-5 py-3 rounded-xl border font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-tennis-gold text-tennis-dark border-tennis-gold shadow-md shadow-tennis-gold/15'
                  : 'bg-tennis-deep/40 text-slate-400 border-tennis-gold/10 hover:border-tennis-gold/30 hover:text-tennis-cream'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Accordion items with Framer Motion */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {activeItems.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div 
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isExpanded 
                  ? 'border-tennis-gold/45 bg-tennis-deep/60 shadow-lg shadow-tennis-gold/5' 
                  : 'border-tennis-gold/10 bg-tennis-deep/20 hover:border-tennis-gold/30'
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                    isExpanded 
                      ? 'bg-tennis-gold border-tennis-gold text-tennis-dark' 
                      : 'bg-tennis-dark border-tennis-gold/30 text-tennis-gold'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-xs font-display font-semibold tracking-wide text-tennis-cream uppercase">
                    {item.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-tennis-gold transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-tennis-gold/10 space-y-4">
                      
                      {/* Description */}
                      <p className="text-xs text-slate-350 leading-relaxed font-sans font-light tracking-wide">
                        {item.description}
                      </p>

                      {/* Diagnostic checkpoints list */}
                      <div className="bg-[#020d08]/60 p-4 rounded-xl border border-tennis-gold/10 space-y-3">
                        <span className="block text-[8px] font-mono text-tennis-gold uppercase tracking-widest font-bold">
                          DIAGNOSTIC CHECKPOINTS
                        </span>
                        <div className="grid sm:grid-cols-3 gap-2">
                          {item.checkpoints.map((cp, cpIdx) => (
                            <div key={cpIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-tennis-kinetic shrink-0" />
                              <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                                {cp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Optimal metric benchmark overlay */}
                      <div className="flex items-center gap-2 text-[#00F0FF] bg-[#00F0FF]/5 p-3 rounded-lg border border-[#00F0FF]/20">
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        <span className="text-[9px] font-mono tracking-wider">
                          OPTIMAL BENCHMARK: <strong className="font-bold">{item.metric}</strong>
                        </span>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

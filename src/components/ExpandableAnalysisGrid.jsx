import React, { useState } from 'react';
import { ChevronDown, Activity, Settings2, Target, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableAnalysisGrid() {
  const [activeTab, setActiveTab] = useState('kinetics');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tabs = [
    { id: 'kinetics', label: 'Kinetics & Kinematics', icon: Activity },
    { id: 'analytical', label: 'Analytical Biomechanics', icon: Settings2 },
    { id: 'diagnostics', label: 'Performance Diagnostics', icon: Target },
  ];

  const data = {
    kinetics: [
      {
        title: "Feet Placement & Stance Coiling",
        description: "Evaluation of stance base width, feet alignment angles relative to the baseline, and coiling depth. Proper foot positioning ensures optimal linear and angular momentum generation.",
        checkpoints: ["Base width ratio", "Back foot weight placement", "Linear-to-rotational force transition"],
        metric: "Knee loading angle range: 110° - 130°"
      },
      {
        title: "Racquet Path & Swing Trajectory",
        description: "Digitized tracking of the racquet tip trajectory during preparation, drop, acceleration, and contact phases. We map spatial paths to eliminate swing loops and ensure clean contact.",
        checkpoints: ["Swing plane deviations", "Point of contact coordinates", "Follow-through wrap trajectory"],
        metric: "Swing plane efficiency target: >94%"
      },
      {
        title: "Balance & Center of Gravity (CoG)",
        description: "Monitoring vertical and horizontal shifts in center of gravity. Maintaining center alignment throughout the trunk rotation maximizes stroke control and directional accuracy.",
        checkpoints: ["Head alignment during contact", "Hip drift parameters", "Post-impact stability indicators"],
        metric: "CoG alignment drift: <1.5 inches"
      },
      {
        title: "Segmental Kinetic Sequencing",
        description: "Analyzing the timing delay between lower body drive, core rotation, shoulder release, elbow snap, and wrist contact. Ensuring force transfers without energy leaks.",
        checkpoints: ["Ground force loading delay", "Pelvic rotation velocities", "Release alignment sequences"],
        metric: "Joint deceleration delay: 0.04s - 0.08s"
      }
    ],
    analytical: [
      {
        title: "Joint Loading & Angle Diagnostics",
        description: "Precise measurements of elbow extension, shoulder rotation, knee deflection, and hip flexion angles at key milestones of the stroke. Perfect for diagnosing inefficiencies.",
        checkpoints: ["Elbow flexion at impact", "Shoulder abduction angle", "Maximum knee compression index"],
        metric: "Shoulder rotation velocity: 400°/sec+"
      },
      {
        title: "Postural Stability & Spine Alignment",
        description: "Checks spinal tilt angles and torso rotation limits during maximum loading. Maintaining straight vertical spine rotation prevents disc strains and boosts torsional speed.",
        checkpoints: ["Spine angle at loading", "Lateral trunk bend factor", "Upper/lower body rotation separation"],
        metric: "Maximum spinal tilt deviation: <8°"
      },
      {
        title: "Base of Support (BoS) Alignment",
        description: "Scans the surface area covered by feet relative to weight distribution coordinates. A wider, more dynamic BoS directly improves shot acceleration and recovery speed.",
        checkpoints: ["Dynamic stance area mapping", "Weight shifting coordinate timeline", "Lead foot recovery index"],
        metric: "Stance-to-Height ratio: 0.70 - 0.85"
      },
      {
        title: "Rotational Leverage Analytics",
        description: "Assesses mechanical torque forces around the hips, waist, and shoulders. Lever length calculations help players optimize torque outputs.",
        checkpoints: ["Shoulder-to-wrist leverage ratio", "Hip rotation velocity scaling", "Rotational deceleration efficiency"],
        metric: "Peak pelvic angular velocity: 520°/sec"
      }
    ],
    diagnostics: [
      {
        title: "15 Key KPI Performance Benchmarks",
        description: "A complete report checking your stroke metrics against customized baseline limits compiled from national juniors, collegiate standouts, and professional profiles.",
        checkpoints: ["Force generation coefficient", "Racquet-ball compression duration", "Stance release synchronization"],
        metric: "Cohesion index score target: >90"
      },
      {
        title: "Overuse & Structural Strain Risk Identifiers",
        description: "Pinpoints joints subjected to extreme torque patterns or incorrect loading angles that are highly correlated with tennis elbow, rotator cuff tears, or patellar tendinitis.",
        checkpoints: ["Elbow stress load indices", "Rotator cuff deceleration stress", "Ankle loading impact profile"],
        metric: "Joint risk index score: <15%"
      },
      {
        title: "Professional Biomechanical Profiles Comparison",
        description: "A side-by-side synchronization of your skeleton kinematics next to professional models (e.g. Federer's forehand or Djokovic's backhand) to visually highlight target improvements.",
        checkpoints: ["Timing overlay graphs", "Joint trajectory matching", "Angle differential parameters"],
        metric: "Kinematic match accuracy goal: >85%"
      },
      {
        title: "Targeted Drills & Corrective Training Plans",
        description: "Personalized biomechanical exercises based on your metrics to rebuild muscle memory and fix joint angles, including progress check timelines.",
        checkpoints: ["Muscle activation routines", "Angle adjustment exercises", "Slow-motion drill progressions"],
        metric: "Typical adoption cycle: 14 - 21 days"
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
              className={`px-5 py-3 rounded-xl border font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
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
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                    isExpanded 
                      ? 'bg-tennis-gold border-tennis-gold text-tennis-dark' 
                      : 'bg-tennis-dark border-tennis-gold/30 text-tennis-gold'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="font-display font-semibold text-sm md:text-base text-tennis-cream">
                    {item.title}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-tennis-gold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-tennis-gold/10 text-sm space-y-4">
                      <p className="text-slate-300 leading-relaxed font-sans text-xs md:text-sm">
                        {item.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 bg-tennis-dark/45 border border-tennis-gold/5 p-4 rounded-lg">
                        <div>
                          <span className="block text-[9px] font-mono text-tennis-gold uppercase tracking-wider mb-2">Technical Checkpoints</span>
                          <ul className="space-y-1">
                            {item.checkpoints.map((cp, cIdx) => (
                              <li key={cIdx} className="text-xs text-slate-400 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-tennis-diagnostic shrink-0" />
                                {cp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-tennis-gold/10 pt-3 md:pt-0 md:pl-4">
                          <span className="text-[9px] font-mono text-tennis-kinetic uppercase tracking-wider mb-1">Target Metric Standard</span>
                          <span className="text-xs font-mono font-semibold text-tennis-cream bg-tennis-deep/80 border border-tennis-kinetic/20 px-2.5 py-1.5 rounded inline-block">
                            {item.metric}
                          </span>
                        </div>
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

import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X, Sparkles, Filter } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const articles = [
    {
      id: 1,
      title: "The Kinetic Chain in the Modern Serve",
      summary: "Understand how energy flows from the ground up through your legs, core, shoulders, and racquet tip. Minor delays can cost you up to 15 MPH in racquet speed.",
      content: `The tennis serve is a complex biomechanical movement that relies on a concept called the **Kinetic Chain**. 
      
Instead of generating force solely from the shoulder or arm, elite players coordinate sequential muscle activations starting from the feet up to the hand.

### The 4 Major Kinetic Links:
1. **The Ground Drive (Legs)**: Your legs act as the initial force coil. By flexing the knees to a target angle of 115° to 125°, you store mechanical elastic energy.
2. **Core Torsion (Pelvis & Hips)**: As the knees drive upward, the hips rotate first, creating a twisting separation between the pelvis and the shoulders. This 'stretch-shortening cycle' multiplies potential energy.
3. **Shoulder Carriage & Rotation**: The torso snaps open, bringing the dominant shoulder forward. The elbow extends as it tracks the vertical path.
4. **Wrist Release & Pronation**: The forearm pronates outwards just before contact, releasing the accumulated force vector straight into the ball.

### Finding Energy Leaks
An 'energy leak' occurs when one link in this chain decelerates or triggers too early. For instance, if your hips rotate after you begin your swing rather than before, you lose up to 30% of your potential racquet velocity. This forces the shoulder to overcompensate, significantly elevating the risk of rotator cuff strains.`,
      tag: "Serve Mechanics",
      date: "Dec 12, 2025",
      readTime: "6 min read",
      author: "Hans G., B.S. BME"
    },
    {
      id: 2,
      title: "Wrist Lag: Power Secret or Tennis Elbow Trap?",
      summary: "We break down the forearm mechanics of the modern ATP forehand. Learn the exact angle ranges to prevent tendon loading issues.",
      content: `The 'wrist lag' is a hallmark of modern professional forehands. It refers to the position where the racquet head lags behind the hand during the acceleration phase, snapping forward just before contact. 

While wrist lag is essential for generating heavy topspin and high racquet speeds, incorrect execution is the leading cause of medial and lateral epicondylitis (Tennis Elbow).

### The Mechanics of Safe Wrist Lag:
- **Relaxed Grip Tension**: Squeezing the grip at a 9/10 tension locks the forearm flexors, preventing natural lag and sending shockwaves directly to the elbow tendon. Maintain tension at a 3/10 or 4/10.
- **Optimal Angle Ranges**: At maximum lag, the angle between the forearm and the racquet shaft should never exceed 110°. Forcing a tighter angle places extreme shearing loads on the wrist ligaments.
- **Impact Position**: The wrist must lock back into a stable extension position immediately prior to impact. A loose or flipping wrist at the contact point leads to massive variance in shot depth and chronic tendon inflammation.

### Diagnostic Takeaway
If you experience elbow soreness after hitting heavy groundstrokes, your wrist is likely dragging behind the hand too late, or you are 'snapping' the wrist at impact rather than relying on natural shoulder-driven rotation.`,
      tag: "Forehand Analytics",
      date: "Nov 28, 2025",
      readTime: "5 min read",
      author: "Hans G., B.S. BME"
    },
    {
      id: 3,
      title: "Footwork Dynamics & Ground Force Coefficients",
      summary: "How stance configuration (open, semi-open, closed) affects pelvic rotation speed and baseline recovery vectors.",
      content: `In tennis biomechanics, footwork is not just about running to the ball—it is about establishing a solid **Base of Support (BoS)** to couple ground reaction forces.

### Stance Variations and Pelvic Torque:
1. **Open Stance**: Excellent for wide balls and modern baseline rallies. Both feet are aligned parallel to the baseline. It allows for immediate lateral loading and rapid recovery back to the center of the court.
2. **Semi-Open Stance**: The optimal balance for mid-court baseline hits. The front foot is aligned at a 45-degree angle. This setup allows for simultaneous lateral shift and forward linear drive.
3. **Closed Stance**: Best suited for slice approaches and moving forward. It maximizes linear momentum but restricts pelvic rotation, slowing down recovery steps by up to 0.4 seconds.

### Ground Force Coefficient
Our 90-point reports analyze your stance width relative to your height. An narrow base restricts knee compression limits, while a base that is too wide prevents rapid pelvic release. The golden ratio for elite baseline hitting lies between **0.75 and 0.85 times your height**.`,
      tag: "Footwork & Balance",
      date: "Oct 15, 2025",
      readTime: "4 min read",
      author: "Hans G., B.S. BME"
    }
  ];

  const tags = ["All", "Serve Mechanics", "Forehand Analytics", "Footwork & Balance"];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(a => a.tag === activeFilter);

  return (
    <div className="w-full pt-32 pb-24 bg-tennis-dark bg-grid-pattern min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-tennis-gold font-bold tracking-widest uppercase">Biomechanical Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-tennis-cream mt-2">
            The Biomechanics Blog
          </h2>
          <p className="text-xs text-slate-400 mt-2 font-sans font-light">Discover the physics, joint loads, and kinetic rules governing elite tennis play.</p>
          <div className="w-16 h-[2px] bg-tennis-gold mx-auto mt-4" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 border-b border-tennis-gold/10 pb-4">
          <Filter className="w-3.5 h-3.5 text-tennis-gold mr-2" />
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === tag 
                  ? 'bg-tennis-gold text-tennis-dark border-tennis-gold' 
                  : 'bg-tennis-deep/40 text-slate-400 border-tennis-gold/10 hover:border-tennis-gold/30 hover:text-tennis-cream'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              className="glass-card rounded-2xl p-6 border border-tennis-gold/10 flex flex-col justify-between hover:border-tennis-gold/30 transition-colors"
            >
              <div>
                <span className="text-[9px] font-mono text-tennis-gold uppercase bg-tennis-gold/10 border border-tennis-gold/30 px-3 py-0.5 rounded-full inline-block mb-5">
                  {article.tag}
                </span>
                
                <h4 className="text-base md:text-lg font-display font-semibold text-tennis-cream leading-snug">
                  {article.title}
                </h4>
                
                <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans font-light line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-tennis-gold/10">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-3 rounded-xl bg-tennis-deep hover:bg-tennis-medium border border-tennis-gold/30 hover:border-tennis-gold text-tennis-gold text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Reading Overlay */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#020d08] border border-tennis-gold/30 max-w-2xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
              
              {/* Overlay Header */}
              <div className="flex items-center justify-between border-b border-tennis-gold/15 p-5 bg-[#002B1A]/40">
                <div>
                  <span className="text-[9px] font-mono text-tennis-gold uppercase tracking-wider">{selectedArticle.tag}</span>
                  <h4 className="text-base md:text-xl font-display font-semibold text-tennis-cream mt-0.5">{selectedArticle.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full border border-tennis-gold/30 text-tennis-gold hover:border-tennis-gold/75 hover:bg-tennis-deep flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-xs md:text-sm text-slate-300 leading-relaxed font-sans scroll-smooth">
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 border-b border-tennis-gold/10 pb-4">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-tennis-gold" /> By {selectedArticle.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Published {selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                </div>

                {/* Article Body parser */}
                <div className="space-y-4 font-sans text-xs md:text-sm font-light leading-relaxed">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h5 key={index} className="text-sm font-semibold font-display text-tennis-cream pt-3 border-b border-tennis-gold/15 pb-1">
                          {paragraph.replace('### ', '')}
                        </h5>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 text-slate-400 pl-2">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <li key={liIdx}>{li.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    
                    let htmlContent = paragraph;
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    htmlContent = htmlContent.replace(boldRegex, '<strong class="text-tennis-gold font-semibold">$1</strong>');

                    return (
                      <p 
                        key={index} 
                        className="leading-relaxed font-light text-slate-300"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                      />
                    );
                  })}
                </div>

                {/* CTA at end of article */}
                <div className="bg-[#002B1A]/40 border border-tennis-gold/20 p-6 rounded-xl text-center space-y-3 mt-8">
                  <Sparkles className="w-6 h-6 text-tennis-gold mx-auto" />
                  <span className="block font-display font-semibold text-tennis-cream text-xs">Want a customized mechanical assessment of your stroke?</span>
                  <p className="text-[11px] text-slate-400 leading-normal max-w-sm mx-auto font-light">
                    Hans will break down your shoulder, elbow, wrist and hip coordinates in our professional 90-Point report.
                  </p>
                  
                  <div className="flex justify-center pt-2">
                    <PremiumButton
                      onClick={() => {
                        const text = encodeURIComponent(`Hi Hans, I just read your article "${selectedArticle.title}" and would like to learn more about my own stroke biomechanics.`);
                        window.open(`https://wa.me/917330712779?text=${text}`, '_blank');
                      }}
                    >
                      Consult Now
                    </PremiumButton>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

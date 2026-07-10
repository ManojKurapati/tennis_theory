import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X, Sparkles, Filter } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const articles = [
    {
      id: 1,
      title: "The Power Chain: How to Serve Faster with Less Effort",
      summary: "Understand how force transfers from your feet, up through your hips, core, and shoulders into the racquet. Even small timing delays can cost you 15 MPH in serve speed.",
      content: `The tennis serve is a full-body movement that relies on what coaches call the **Power Chain** (or kinetic chain). 
      
Instead of hitting the ball with just your shoulder or arm, elite players coordinate their muscle movements in a smooth sequence starting from the feet up.

### The 4 Power Links:
- **The Leg Load**: Your legs act as your power source. By bending your knees as you throw the ball up, you store energy like a coiled spring.
- **The Torso Twist**: As your legs drive upward, your hips turn first, twisting your core against your shoulders. This stretch multiplies your swinging power.
- **The Shoulder Turn**: Your upper body snaps open, bringing your hitting shoulder forward while your elbow extends upward.
- **The Wrist Snap**: Your arm rolls outward (pronation) just before impact, releasing all the stored speed directly into the ball.

### Finding Power Leaks
A 'power leak' occurs when one link in this sequence is late or out of sync. For example, if you start swinging your arm before your hips turn, you lose up to 30% of your racquet speed. This forces your shoulder to work twice as hard, often leading to rotator cuff strains.`,
      tag: "Serve Mechanics",
      date: "Dec 12, 2025",
      readTime: "6 min read",
      author: "Hans G., USPTA Coach"
    },
    {
      id: 2,
      title: "Wrist Lag: How to Boost Forehand Speed Without Tennis Elbow",
      summary: "We break down the wrist snap mechanics of the modern ATP forehand. Learn how to get maximum racquet speed without putting dangerous stress on your elbow.",
      content: `The 'wrist lag' is the secret behind heavy modern forehands. It describes how the racquet head drags behind the hand during your forward swing, snapping forward at the last split-second before contact. 

While this lag creates massive topspin and racquet head speed, doing it wrong is the #1 cause of Tennis Elbow.

### How to Dynamic Lag Safely:
- **Relax Your Grip**: Squeezing your handle too hard (9/10 tension) locks your forearm muscles. This stops the natural lag and sends jarring shockwaves straight to your elbow tendon. Keep your grip loose (about 3/10 tension).
- **Avoid Extreme Angles**: The angle between your arm and the racquet shaft should be natural. Pulling your wrist back too far puts heavy stress on your wrist ligaments.
- **Firm Contact**: Your wrist must feel firm and stable right at impact. A loose or flipping wrist at contact leads to erratic shots and chronic elbow pain.

### Practical Takeaway
If your elbow is sore after hitting groundstrokes, you are likely either squeezing the racquet too tight or snapping your wrist at impact instead of letting your body rotation swing the arm.`,
      tag: "Forehand Analytics",
      date: "Nov 28, 2025",
      readTime: "5 min read",
      author: "Hans G., USPTA Coach"
    },
    {
      id: 3,
      title: "Stance Secret: How Footwork Dictates Groundstroke Power",
      summary: "How choosing between an open, semi-open, or closed stance affects your body rotation speed and your ability to recover quickly.",
      content: `In tennis, footwork isn't just about running to the ball—it is about setting a solid base so you can transfer power into your shots.

### Stance Styles and Torso Turn:
- **Open Stance**: Excellent for wide balls and deep baseline rallies. Your feet are parallel to the baseline. This lets you load weight onto your outside leg and push back to the center of the court instantly.
- **Semi-Open Stance**: The ideal choice for standard groundstrokes. Your front foot is at a 45-degree angle. This setup lets you step forward while still rotating your hips.
- **Closed Stance**: Best for slice approaches and moving to the net. While it drives you forward, it limits your hip rotation, making it harder to recover back into position quickly.

### Finding Your Balance Width
Our reports check your stance width compared to your height. A stance that is too narrow makes you lose balance, while a stance that is too wide locks your hips. The sweet spot for balanced hitting is having a stance width between **75% and 85% of your height** to allow natural hip release.`,
      tag: "Footwork & Balance",
      date: "Oct 15, 2025",
      readTime: "4 min read",
      author: "Hans G., USPTA Coach"
    }
  ];

  const tags = ["All", "Serve Mechanics", "Forehand Analytics", "Footwork & Balance"];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(a => a.tag === activeFilter);

  return (
    <div className="w-full pt-40 pb-32 bg-tennis-dark bg-grid-pattern min-h-screen">
      <div className="container mx-auto px-8 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-tennis-gold font-bold tracking-ultra uppercase block mb-3 font-mono">Performance Tips</span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-tennis-cream mt-2 leading-tight tracking-wide">
            The Tennis Science Blog
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto font-sans font-light tracking-wide">
            Discover simple tips, player case studies, and visual guides to improve your court movement.
          </p>
          <div className="w-16 h-[0.5px] bg-tennis-gold mx-auto mt-4" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 border-b border-tennis-gold/10 pb-4">
          <Filter className="w-3.5 h-3.5 text-tennis-gold mr-2" />
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tag 
                  ? 'bg-tennis-gold text-tennis-dark border-tennis-gold' 
                  : 'bg-[#002B1A]/80 text-slate-400 border-tennis-gold/15 hover:border-tennis-gold/30 hover:text-tennis-cream'
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
                
                <h4 className="text-sm font-display font-semibold text-tennis-cream tracking-wide uppercase leading-snug">
                  {article.title}
                </h4>
                
                <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans font-light line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-tennis-gold/10">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-3 rounded-xl bg-tennis-deep hover:bg-tennis-medium border border-tennis-gold/30 hover:border-tennis-gold text-tennis-gold text-[10px] font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
                  <h4 className="text-sm font-display font-semibold text-tennis-cream mt-0.5 uppercase tracking-wide">{selectedArticle.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full border border-tennis-gold/30 text-tennis-gold hover:border-tennis-gold/75 hover:bg-tennis-deep flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-xs md:text-sm text-slate-350 leading-relaxed font-sans scroll-smooth">
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
                  <p className="text-[11px] text-slate-450 leading-normal max-w-sm mx-auto font-light">
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

import React, { useState, useEffect } from 'react';
import { Upload, FileVideo, Shield, CheckCircle, RefreshCw, Smartphone, Play, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function UploadAnalyzerDemo() {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [result, setResult] = useState(null);

  const logs = [
    "Establishing cloud video link...",
    "Calibrating anatomical frame coordinates...",
    "Scanning anatomical landmarks (24 joints)...",
    "Running frame-by-frame shoulder tilt vector calculations...",
    "Assessing kinetic chain sequencing (Force Transfer: Legs -> Core -> Racquet)...",
    "Detecting contact-point racquet acceleration offsets...",
    "Compiling biomechanical score ratios..."
  ];

  useEffect(() => {
    let interval;
    if (analyzing) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setAnalyzing(false);
              setResult({
                stroke: "Forehand Topspin Drive",
                racquetSpeed: "86.4 MPH",
                hipRotation: "480 deg/s",
                kneeFlexion: "128° (Optimal: 120°)",
                kineticTiming: "0.08s (Leg-to-Hip delay)",
                riskRating: "Low (7%)",
                grade: "A-",
                feedback: "Excellent energy coil from the legs. Minor deceleration of the racquet arm prior to contact suggests a slight timing lag. Increase wrist lag for maximum power."
              });
              // Fire celebratory confetti on complete
              confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#D4AF37', '#00F0FF', '#00DF9A', '#FBF9F4']
              });
            }, 800);
            return 100;
          }
          const next = prev + Math.floor(Math.random() * 8) + 3;
          // Slowly progress log lines
          const index = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
          setLogIndex(index);
          return Math.min(next, 100);
        });
      }, 180);
    }
    return () => clearInterval(interval);
  }, [analyzing]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (analyzing) return;
    const droppedFile = e.dataTransfer?.files[0] || e.target.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile);
      setResult(null);
      setProgress(0);
      setAnalyzing(true);
    } else {
      alert("Please select or drop a valid video file.");
    }
  };

  const handleSampleRun = () => {
    if (analyzing) return;
    setFile({ name: "sample_stroke_forehand.mp4", size: "24.5 MB" });
    setResult(null);
    setProgress(0);
    setAnalyzing(true);
  };

  const resetAnalyzer = () => {
    setFile(null);
    setResult(null);
    setProgress(0);
    setLogIndex(0);
  };

  const triggerWhatsApp = () => {
    const text = encodeURIComponent("Hi Hans, I just ran the online biomechanical analyzer mockup and would like to schedule a professional 90-Point Deep Analysis for my strokes.");
    window.open(`https://wa.me/917330712779?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card rounded-2xl border border-tennis-gold/20 p-6 md:p-8 relative overflow-hidden">
      {/* Background Matrix details */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-tennis-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-tennis-kinetic/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-tennis-gold/15 pb-4 mb-6">
        <div>
          <h4 className="text-lg font-display font-semibold text-tennis-cream flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-tennis-gold" /> Upload & Diagnostics Portal
          </h4>
          <p className="text-xs text-slate-400 mt-1">Submit your hit for simulated biomechanical mapping</p>
        </div>
        <span className="text-[10px] font-mono bg-tennis-gold/10 border border-tennis-gold/30 text-tennis-gold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Secure Sandbox
        </span>
      </div>

      {/* Upload State */}
      {!file && !analyzing && !result && (
        <div 
          className="border border-dashed border-tennis-gold/25 rounded-xl p-8 text-center transition-all duration-300 hover:border-tennis-gold/60 bg-tennis-dark/40 cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          onClick={() => document.getElementById('video-uploader').click()}
        >
          <input 
            type="file" 
            id="video-uploader" 
            className="hidden" 
            accept="video/*"
            onChange={handleFileDrop}
          />
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-tennis-deep border border-tennis-gold/10 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105">
              <Upload className="w-6 h-6 text-tennis-gold" />
            </div>
            <p className="text-sm font-semibold text-tennis-cream">Drag & drop your tennis stroke video here</p>
            <p className="text-xs text-slate-500 mt-1">Accepts MP4, MOV up to 100MB (multi-angle support)</p>
            
            <div className="w-full flex items-center justify-center gap-4 mt-6">
              <div className="h-[1px] bg-slate-800 flex-grow max-w-[80px]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">OR</span>
              <div className="h-[1px] bg-slate-800 flex-grow max-w-[80px]" />
            </div>

            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSampleRun();
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-tennis-deep hover:bg-tennis-medium border border-tennis-gold/30 text-xs font-semibold text-tennis-gold tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Use Sample Pro Video
            </button>
          </div>
        </div>
      )}

      {/* Analyzing state */}
      {analyzing && (
        <div className="py-8 text-center">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-tennis-gold/20" />
              <div className="absolute inset-0 rounded-full border-4 border-t-tennis-kinetic animate-spin" />
              <div className="absolute inset-2 bg-tennis-deep rounded-full flex items-center justify-center">
                <span className="text-[11px] font-mono font-bold text-tennis-kinetic">{progress}%</span>
              </div>
            </div>
            
            <h5 className="text-sm font-semibold text-tennis-cream">Analyzing Motion Data...</h5>
            <p className="text-xs text-slate-500 mt-0.5">{file?.name}</p>
            
            {/* Telemetry Output console */}
            <div className="w-full mt-6 bg-[#010e09] border border-tennis-kinetic/10 rounded-lg p-4 text-left font-mono text-[10px] text-tennis-kinetic space-y-1 h-32 overflow-hidden relative shadow-inner">
              <div className="absolute top-1 right-2 animate-pulse text-[8px] bg-red-950 text-red-400 px-1 border border-red-900 rounded">
                LIVE COMPUTE
              </div>
              <div className="text-slate-500">// TENNIS THEORY ENGINE v2.0</div>
              {logs.slice(0, logIndex + 1).map((log, index) => (
                <div key={index} className="flex items-start gap-1">
                  <span className="text-tennis-gold">✓</span>
                  <span className={index === logIndex ? 'text-tennis-cream font-bold' : ''}>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results output */}
      {result && (
        <div className="space-y-6">
          <div className="bg-tennis-deep/50 border border-tennis-gold/20 rounded-xl p-5 relative overflow-hidden">
            {/* Header info */}
            <div className="flex items-start justify-between border-b border-tennis-gold/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono text-tennis-gold uppercase tracking-wider">DIAGNOSTIC REPORT</span>
                <h5 className="text-base font-display font-semibold text-tennis-cream">{result.stroke}</h5>
              </div>
              <div className="text-center bg-tennis-gold/15 border border-tennis-gold/30 px-3 py-1 rounded-lg">
                <span className="block text-[8px] font-mono text-tennis-gold">GRADE</span>
                <span className="text-lg font-bold font-display text-tennis-gold">{result.grade}</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-tennis-dark/40 border border-tennis-gold/5 p-3 rounded-lg">
                <span className="block text-[9px] font-mono text-slate-500 uppercase">Racquet Head Speed</span>
                <span className="text-sm font-semibold font-display text-tennis-cream mt-0.5">{result.racquetSpeed}</span>
              </div>
              <div className="bg-tennis-dark/40 border border-tennis-gold/5 p-3 rounded-lg">
                <span className="block text-[9px] font-mono text-slate-500 uppercase">Peak Hip Rotation</span>
                <span className="text-sm font-semibold font-display text-tennis-cream mt-0.5">{result.hipRotation}</span>
              </div>
              <div className="bg-tennis-dark/40 border border-tennis-gold/5 p-3 rounded-lg">
                <span className="block text-[9px] font-mono text-slate-500 uppercase">Knee Flexion (Load)</span>
                <span className="text-sm font-semibold font-display text-tennis-kinetic mt-0.5">{result.kneeFlexion}</span>
              </div>
              <div className="bg-tennis-dark/40 border border-tennis-gold/5 p-3 rounded-lg">
                <span className="block text-[9px] font-mono text-slate-500 uppercase">Injury Strain Risk</span>
                <span className="text-sm font-semibold font-display text-tennis-diagnostic mt-0.5">{result.riskRating}</span>
              </div>
            </div>

            {/* Scientific feedback */}
            <div className="mt-4 border-t border-tennis-gold/10 pt-3">
              <span className="block text-[9px] font-mono text-tennis-gold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Biomechanical Analysis Summary
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{result.feedback}</p>
            </div>
          </div>

          {/* CTA & Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button 
              onClick={triggerWhatsApp}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-tennis-gold hover:bg-tennis-gold/90 text-tennis-dark font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border-glow-gold"
            >
              <Send className="w-4 h-4 fill-current" /> Book Full 90-Point Report
            </button>
            
            <button 
              onClick={resetAnalyzer}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-tennis-gold/30 hover:border-tennis-gold/60 text-tennis-gold text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Analyze New Video
            </button>
          </div>
        </div>
      )}

      {/* Safety / Compliance footer */}
      <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-500">
        <Shield className="w-3 h-3 text-tennis-gold" />
        <span>Videos processed securely in accordance with our strict data privacy policies.</span>
      </div>
    </div>
  );
}

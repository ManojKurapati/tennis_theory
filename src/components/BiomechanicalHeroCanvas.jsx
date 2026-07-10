import React, { useEffect, useRef, useState } from 'react';

// Hardcoded kinetic chain sequences representing key positions in:
// 1. A High-Performance Serve (from loading phase to release)
// 2. An Elite Forehand (from backswing to follow-through)
const SERVE_SEQUENCE = [
  // 0: Trophy stance / loading
  {
    lAnkle: [150, 480], lKnee: [140, 420], lHip: [130, 330],
    rAnkle: [180, 485], rKnee: [170, 430], rHip: [155, 335],
    spine: [135, 270], head: [130, 150],
    lShoulder: [115, 240], lElbow: [90, 200], lWrist: [80, 160], ball: [80, 130],
    rShoulder: [150, 245], rElbow: [170, 270], rWrist: [195, 240], racquet: [230, 280]
  },
  // 1: Coiling / max knee flexion
  {
    lAnkle: [150, 480], lKnee: [120, 430], lHip: [125, 350],
    rAnkle: [180, 485], rKnee: [155, 435], rHip: [145, 352],
    spine: [120, 285], head: [120, 160],
    lShoulder: [100, 250], lElbow: [70, 200], lWrist: [60, 140], ball: [60, 80],
    rShoulder: [140, 255], rElbow: [175, 290], rWrist: [190, 310], racquet: [210, 360]
  },
  // 2: Drive / extension
  {
    lAnkle: [150, 470], lKnee: [135, 400], lHip: [125, 315],
    rAnkle: [170, 475], rKnee: [155, 405], rHip: [140, 320],
    spine: [125, 240], head: [125, 125],
    lShoulder: [105, 205], lElbow: [85, 170], lWrist: [75, 140], ball: [75, 50],
    rShoulder: [145, 210], rElbow: [150, 230], rWrist: [145, 200], racquet: [135, 230]
  },
  // 3: Acceleration / contact point
  {
    lAnkle: [140, 450], lKnee: [135, 385], lHip: [130, 295],
    rAnkle: [155, 460], rKnee: [150, 390], rHip: [145, 300],
    spine: [135, 215], head: [140, 110],
    lShoulder: [110, 190], lElbow: [100, 220], lWrist: [95, 240], ball: [170, 10],
    rShoulder: [160, 185], rElbow: [165, 120], rWrist: [170, 60], racquet: [175, 10]
  },
  // 4: Follow-through
  {
    lAnkle: [110, 460], lKnee: [100, 400], lHip: [110, 320],
    rAnkle: [150, 470], rKnee: [135, 405], rHip: [135, 322],
    spine: [125, 250], head: [120, 160],
    lShoulder: [105, 220], lElbow: [110, 250], lWrist: [115, 270], ball: [280, 200],
    rShoulder: [145, 220], rElbow: [120, 210], rWrist: [80, 230], racquet: [50, 270]
  }
];

const FOREHAND_SEQUENCE = [
  // 0: Unit turn / preparation
  {
    lAnkle: [120, 480], lKnee: [115, 430], lHip: [125, 350],
    rAnkle: [200, 480], rKnee: [195, 430], rHip: [180, 350],
    spine: [150, 280], head: [150, 170],
    lShoulder: [125, 240], lElbow: [100, 230], lWrist: [80, 210], ball: [70, 200],
    rShoulder: [175, 240], rElbow: [210, 260], rWrist: [240, 270], racquet: [270, 230]
  },
  // 1: Drop / Loading stance
  {
    lAnkle: [120, 480], lKnee: [110, 435], lHip: [125, 360],
    rAnkle: [200, 480], rKnee: [185, 435], rHip: [175, 360],
    spine: [148, 295], head: [150, 185],
    lShoulder: [120, 255], lElbow: [95, 240], lWrist: [75, 220], ball: [100, 210],
    rShoulder: [170, 255], rElbow: [195, 290], rWrist: [215, 325], racquet: [230, 375]
  },
  // 2: Acceleration / Point of contact
  {
    lAnkle: [130, 480], lKnee: [125, 420], lHip: [140, 345],
    rAnkle: [190, 480], rKnee: [180, 425], rHip: [165, 345],
    spine: [152, 270], head: [150, 165],
    lShoulder: [128, 235], lElbow: [105, 250], lWrist: [90, 260], ball: [120, 230],
    rShoulder: [172, 235], rElbow: [180, 240], rWrist: [160, 230], racquet: [140, 210]
  },
  // 3: Extension / follow-through
  {
    lAnkle: [140, 480], lKnee: [135, 420], lHip: [145, 340],
    rAnkle: [185, 480], rKnee: [180, 425], rHip: [160, 340],
    spine: [152, 260], head: [150, 160],
    lShoulder: [125, 220], lElbow: [110, 240], lWrist: [100, 255], ball: [220, 180],
    rShoulder: [175, 225], rElbow: [150, 190], rWrist: [115, 175], racquet: [85, 155]
  }
];

export default function BiomechanicalHeroCanvas() {
  const canvasRef = useRef(null);
  const [activeStroke, setActiveStroke] = useState('serve');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const strokeData = activeStroke === 'serve' ? SERVE_SEQUENCE : FOREHAND_SEQUENCE;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let progress = 0;
    const racquetTrail = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const interpolate = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const getFramePoint = (frames, progress, key) => {
      const totalFrames = frames.length;
      const index = Math.floor(progress) % totalFrames;
      const nextIndex = (index + 1) % totalFrames;
      const factor = progress % 1;
      
      const startPt = frames[index][key];
      const endPt = frames[nextIndex][key];
      
      return [
        interpolate(startPt[0], endPt[0], factor),
        interpolate(startPt[1], endPt[1], factor)
      ];
    };

    const calculateAngle = (a, b, c) => {
      const ab = { x: a[0] - b[0], y: a[1] - b[1] };
      const cb = { x: c[0] - b[0], y: c[1] - b[1] };
      const dot = ab.x * cb.x + ab.y * cb.y;
      const magAB = Math.sqrt(ab.x * ab.x + ab.y * ab.y);
      const magCB = Math.sqrt(cb.x * cb.x + cb.y * cb.y);
      const angleRad = Math.acos(dot / (magAB * magCB));
      return isNaN(angleRad) ? 0 : Math.round((angleRad * 180) / Math.PI);
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scale = Math.min(canvas.width / 500, canvas.height / 600) * 0.95;
      const offsetX = canvas.width * 0.55 - (150 * scale);
      const offsetY = canvas.height * 0.45 - (280 * scale);

      const tPoint = (pt) => {
        let x = pt[0] * scale + offsetX;
        let y = pt[1] * scale + offsetY;
        
        if (isHovered) {
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180 * 12;
            x += (dx / dist) * force;
            y += (dy / dist) * force;
          }
        }
        return [x, y];
      };

      progress += activeStroke === 'serve' ? 0.010 : 0.012;
      
      const joints = {};
      const keys = Object.keys(strokeData[0]);
      keys.forEach(key => {
        joints[key] = tPoint(getFramePoint(strokeData, progress, key));
      });

      racquetTrail.push([...joints.racquet]);
      if (racquetTrail.length > 40) racquetTrail.shift();

      // 1. Widescreen matrix grids (0.5px thin rules)
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.08)';
      ctx.lineWidth = 0.5;
      const step = 45;
      for (let i = 0; i < canvas.width; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += step) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Ground plane reference
      const groundY = 485 * scale + offsetY;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.2)';
      ctx.lineWidth = 0.5;
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();

      ctx.fillStyle = 'rgba(201, 162, 39, 0.45)';
      ctx.font = '7.5px monospace';
      ctx.fillText("REFERENCE PLANE: " + Math.round(groundY) + "px", 30, groundY - 6);

      // 2. Swing Path (Rotational Motion Gold Trail)
      if (racquetTrail.length > 1) {
        for (let i = 0; i < racquetTrail.length - 1; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(201, 162, 39, ${i / racquetTrail.length * 0.75})`;
          ctx.lineWidth = (i / racquetTrail.length) * 4 + 1;
          ctx.moveTo(racquetTrail[i][0], racquetTrail[i][1]);
          ctx.lineTo(racquetTrail[i+1][0], racquetTrail[i+1][1]);
          ctx.stroke();
        }
      }

      // 3. Bones (Luxury gold & green segments)
      const bones = [
        // Lower kinetic chain (emerald green)
        ['lAnkle', 'lKnee', 'rgba(0, 223, 154, 0.55)'],
        ['lKnee', 'lHip', 'rgba(0, 223, 154, 0.55)'],
        ['rAnkle', 'rKnee', 'rgba(0, 223, 154, 0.55)'],
        ['rKnee', 'rHip', 'rgba(0, 223, 154, 0.55)'],
        ['lHip', 'rHip', 'rgba(0, 223, 154, 0.55)'],
        
        // Torso alignment (luxury gold)
        ['lHip', 'spine', 'rgba(201, 162, 39, 0.55)'],
        ['rHip', 'spine', 'rgba(201, 162, 39, 0.55)'],
        ['spine', 'head', 'rgba(201, 162, 39, 0.55)'],
        ['lShoulder', 'rShoulder', 'rgba(201, 162, 39, 0.55)'],
        ['spine', 'lShoulder', 'rgba(201, 162, 39, 0.55)'],
        ['spine', 'rShoulder', 'rgba(201, 162, 39, 0.55)'],
        
        // Upper kinetic chain (teal)
        ['lShoulder', 'lElbow', 'rgba(0, 240, 255, 0.5)'],
        ['lElbow', 'lWrist', 'rgba(0, 240, 255, 0.5)'],
        ['rShoulder', 'rElbow', 'rgba(0, 240, 255, 0.6)'],
        ['rElbow', 'rWrist', 'rgba(0, 240, 255, 0.6)'],
        ['rWrist', 'racquet', 'rgba(201, 162, 39, 0.75)']
      ];

      ctx.lineWidth = 2;
      bones.forEach(([b1, b2, color]) => {
        if (joints[b1] && joints[b2]) {
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.moveTo(joints[b1][0], joints[b1][1]);
          ctx.lineTo(joints[b2][0], joints[b2][1]);
          ctx.stroke();
        }
      });

      // 4. Glow Nodes
      Object.entries(joints).forEach(([name, coords]) => {
        if (name === 'ball' && activeStroke === 'serve' && progress % SERVE_SEQUENCE.length > 3.8) return;

        ctx.beginPath();
        let color = '#00F0FF';
        let radius = 4.5;
        
        if (name === 'racquet') {
          color = '#C9A227';
          radius = 6;
        } else if (name === 'head') {
          color = '#FBF9F4';
          radius = 5;
        } else if (name === 'ball') {
          color = '#ccff00';
          radius = 5;
        } else if (['rKnee', 'rElbow', 'spine'].includes(name)) {
          color = '#C9A227';
        }

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.arc(coords[0], coords[1], radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 5. Angular calculations
      const angleSpecs = [
        { label: 'ELBOW_FLEX', p1: 'rShoulder', p2: 'rElbow', p3: 'rWrist', col: 'rgba(0, 240, 255, 0.75)' },
        { label: 'KNEE_FLEX', p1: 'rHip', p2: 'rKnee', p3: 'rAnkle', col: 'rgba(0, 223, 154, 0.75)' }
      ];

      angleSpecs.forEach(spec => {
        const pt1 = joints[spec.p1];
        const pt2 = joints[spec.p2];
        const pt3 = joints[spec.p3];
        if (pt1 && pt2 && pt3) {
          const angle = calculateAngle(pt1, pt2, pt3);
          ctx.fillStyle = spec.col;
          ctx.font = 'bold 8px monospace';
          ctx.fillText(`${spec.label}: ${angle}°`, pt2[0] - 40, pt2[1] + 16);
          
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(201, 162, 39, 0.15)';
          ctx.setLineDash([2, 2]);
          ctx.moveTo(pt2[0], pt2[1]);
          ctx.lineTo(pt2[0] - 20, pt2[1] + 10);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 6. HUD Telemetry overlay (0.5px thin borders, high-contrast text)
      ctx.fillStyle = 'rgba(0, 43, 26, 0.35)';
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.18)';
      ctx.lineWidth = 0.5;
      
      // Upper Left Info HUD
      ctx.fillRect(30, 30, 210, 80);
      ctx.strokeRect(30, 30, 210, 80);
      
      ctx.fillStyle = '#C9A227';
      ctx.font = 'bold 10px Outfit';
      ctx.fillText("STROKE ANALYZER v5.0", 42, 48);
      ctx.fillStyle = 'rgba(251, 249, 244, 0.85)';
      ctx.font = '8.5px monospace';
      ctx.fillText(`STROKE: ${activeStroke.toUpperCase()}`, 42, 65);
      ctx.fillText(`VELOCITY: ${activeStroke === 'serve' ? Math.round(142 + Math.sin(progress) * 22) : Math.round(90 + Math.cos(progress) * 14)} MPH`, 42, 80);
      ctx.fillText(`STATUS: SEQUENCE_SMOOTH`, 42, 95);

      // Upper Right telemetry
      const hudRWidth = 190;
      const hudRX = canvas.width - hudRWidth - 30;
      ctx.fillRect(hudRX, 30, hudRWidth, 95);
      ctx.strokeRect(hudRX, 30, hudRWidth, 95);
      
      ctx.fillStyle = '#00F0FF';
      ctx.font = 'bold 9px Outfit';
      ctx.fillText("STROKE POWER SEQUENCE", hudRX + 12, 46);
      
      const energySegments = ['LEG DRIVE', 'HIP TURN', 'SHOULDER ROTATION', 'WRIST SNAP'];
      energySegments.forEach((segment, idx) => {
        const val = Math.min(100, Math.max(12, Math.abs(Math.sin(progress - idx * 0.45)) * 100));
        ctx.fillStyle = 'rgba(251, 249, 244, 0.5)';
        ctx.font = '7.5px monospace';
        ctx.fillText(segment, hudRX + 12, 63 + idx * 11);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(hudRX + 105, 57 + idx * 11, 70, 4);
        ctx.fillStyle = idx === 3 ? '#C9A227' : '#00DF9A';
        ctx.fillRect(hudRX + 105, 57 + idx * 11, (val / 100) * 70, 4);
      });

      // Mouse crosshairs (0.5px thin rules)
      if (isHovered) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(201, 162, 39, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.arc(mousePos.x, mousePos.y, 16, 0, 2 * Math.PI);
        ctx.moveTo(mousePos.x - 24, mousePos.y);
        ctx.lineTo(mousePos.x + 24, mousePos.y);
        ctx.moveTo(mousePos.x, mousePos.y - 24);
        ctx.lineTo(mousePos.x, mousePos.y + 24);
        ctx.stroke();

        ctx.fillStyle = 'rgba(201, 162, 39, 0.75)';
        ctx.font = '8px monospace';
        ctx.fillText(`TELEMETRY COORDINATES: X:${Math.round(mousePos.x)} Y:${Math.round(mousePos.y)}`, mousePos.x + 10, mousePos.y - 8);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [activeStroke, mousePos, isHovered]);

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      onMouseMove={(e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-70 md:opacity-85" />
      
      {/* Absolute overlay controls */}
      <div className="absolute bottom-10 left-10 z-10 flex gap-4">
        <button 
          onClick={() => setActiveStroke('serve')}
          className={`px-5 py-2 rounded-xl border text-[10px] font-semibold uppercase tracking-widest transition-all duration-500 ${
            activeStroke === 'serve' 
              ? 'bg-tennis-gold text-tennis-dark border-tennis-gold shadow-md shadow-tennis-gold/25' 
              : 'bg-[#002B1A]/80 text-tennis-cream border-tennis-gold/20 hover:border-tennis-gold/60'
          }`}
        >
          Serve Loading Profile
        </button>
        <button 
          onClick={() => setActiveStroke('forehand')}
          className={`px-5 py-2 rounded-xl border text-[10px] font-semibold uppercase tracking-widest transition-all duration-500 ${
            activeStroke === 'forehand' 
              ? 'bg-tennis-gold text-tennis-dark border-tennis-gold shadow-md shadow-tennis-gold/25' 
              : 'bg-[#002B1A]/80 text-tennis-cream border-tennis-gold/20 hover:border-tennis-gold/60'
          }`}
        >
          Forehand Kinetic Coiling
        </button>
      </div>
    </div>
  );
}

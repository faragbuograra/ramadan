import { Particle } from './types';

// Draw a crescent moon
export const drawMoon = (ctx: CanvasRenderingContext2D, particle: Particle) => {
  const r = particle.size / 2;
  ctx.beginPath();
  ctx.arc(0, 0, r, Math.PI * 0.5, Math.PI * 1.5, false);
  ctx.arc(r * 0.4, 0, r * 0.8, Math.PI * 1.5, Math.PI * 0.5, true);
  ctx.closePath();
  ctx.fill();
};

// Draw an Islamic-style 8-pointed star or standard 5-pointed star
export const drawStar = (ctx: CanvasRenderingContext2D, particle: Particle) => {
  const spikes = 5;
  const outerRadius = particle.size / 2;
  const innerRadius = particle.size / 4;
  
  let rot = (Math.PI / 2) * 3;
  let x = 0;
  let y = 0;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(0, -outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = Math.cos(rot) * outerRadius;
    y = Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = Math.cos(rot) * innerRadius;
    y = Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(0, -outerRadius);
  ctx.closePath();
  ctx.fill();
};

// Draw a stylized Lantern (Fanous)
export const drawLantern = (ctx: CanvasRenderingContext2D, particle: Particle) => {
  const width = particle.size * 0.6;
  const height = particle.size;
  
  ctx.beginPath();
  // Top ring
  ctx.arc(0, -height/2 - width/4, width/4, 0, Math.PI * 2);
  
  // Dome
  ctx.moveTo(-width/2, -height/4);
  ctx.quadraticCurveTo(0, -height/2 - width/2, width/2, -height/4);
  
  // Body
  ctx.lineTo(width/2.5, height/3);
  ctx.lineTo(-width/2.5, height/3);
  ctx.lineTo(-width/2, -height/4);
  
  // Base
  ctx.moveTo(-width/3, height/3);
  ctx.lineTo(-width/2, height/2);
  ctx.lineTo(width/2, height/2);
  ctx.lineTo(width/3, height/3);
  
  ctx.fillStyle = particle.color;
  ctx.fill();
  
  // Cutout / inner glow for the lantern
  ctx.beginPath();
  ctx.moveTo(-width/4, -height/6);
  ctx.lineTo(width/4, -height/6);
  ctx.lineTo(width/5, height/4);
  ctx.lineTo(-width/5, height/4);
  ctx.closePath();
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fill();
};

export const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle, glow: boolean) => {
  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation);
  
  ctx.fillStyle = particle.color;
  ctx.globalAlpha = particle.opacity;

  if (glow) {
    ctx.shadowBlur = particle.size;
    ctx.shadowColor = particle.color;
  }

  switch (particle.type) {
    case 'moon':
      drawMoon(ctx, particle);
      break;
    case 'star':
      drawStar(ctx, particle);
      break;
    case 'lantern':
      drawLantern(ctx, particle);
      break;
  }

  ctx.restore();
};

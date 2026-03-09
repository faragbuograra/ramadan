import React, { useEffect, useRef } from 'react';
import { RamadanLightsProps, Particle, ParticleType } from './types';
import { drawParticle } from './particles';

export const RamadanLights: React.FC<RamadanLightsProps> = ({
  particleCount = 50,
  speed = 1.0,
  size = 20,
  colors = ['#FFD700', '#FFF5CC', '#FFFFFF'],
  types = ['moon', 'star', 'lantern'],
  opacity = 0.8,
  glow = true,
  fillContainer = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  const initParticles = (width: number, height: number) => {
    particlesRef.current = Array.from({ length: particleCount }).map((_, i) => createParticle(width, height, i));
  };

  const createParticle = (width: number, height: number, id: number, yPos?: number): Particle => {
    const type = types[Math.floor(Math.random() * types.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Randomize initial properties
    return {
      id,
      x: Math.random() * width,
      y: yPos ?? Math.random() * height,
      size: (Math.random() * 0.5 + 0.5) * size, // 50% to 100% of base size
      speed: (Math.random() * 0.5 + 0.5) * speed,
      type,
      color,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02 * speed, // Slow rotation
      opacity: Math.random() * 0.5 + opacity * 0.5,
    };
  };

  const updateParticles = (width: number, height: number) => {
    particlesRef.current.forEach((p: Particle) => {
      // Float downwards
      p.y += p.speed;
      // Drift slightly horizontally
      p.x += Math.sin(p.y * 0.01) * 0.5 * speed;
      // Rotate slowly
      p.rotation += p.rotationSpeed;

      // Wrap around screen
      if (p.y > height + p.size) {
        // Reset particle at top
        Object.assign(p, createParticle(width, height, p.id, -p.size));
      }
      if (p.x > width + p.size) {
        p.x = -p.size;
      } else if (p.x < -p.size) {
        p.x = width + p.size;
      }
    });
  };

  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((p: Particle) => drawParticle(ctx, p, glow));

    updateParticles(canvas.width, canvas.height);
    animationFrameRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (fillContainer && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initParticles(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, speed, size, fillContainer]); // Re-init on prop change

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: fillContainer ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default RamadanLights;

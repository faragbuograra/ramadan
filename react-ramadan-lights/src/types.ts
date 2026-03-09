export type ParticleType = 'moon' | 'star' | 'lantern';

export interface RamadanLightsProps {
  /** Number of particles to render. Default: 50 */
  particleCount?: number;
  /** Speed multiplier for the floating animation. Default: 1.0 */
  speed?: number;
  /** Base size of the particles. Default: 20 */
  size?: number;
  /** Array of colors to randomly apply to particles. Default: ['#FFD700', '#FFF5CC', '#FFFFFF'] */
  colors?: string[];
  /** Allowed types of particles. Default: ['moon', 'star', 'lantern'] */
  types?: ParticleType[];
  /** Opacity of the particles (0 to 1). Default: 0.8 */
  opacity?: number;
  /** Whether the particles should glow. Default: true */
  glow?: boolean;
  /** Ensure component fills the closest positioned ancestor. Default: true */
  fillContainer?: boolean;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  type: ParticleType;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

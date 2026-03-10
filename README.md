# react-ramadan-lights

A beautiful, lightweight, and customizable React component that adds falling Ramadan-themed objects (lanterns, moons, stars) to your web applications. Similar to `react-snowfall` but specially designed for Ramadan!

## Features

- 🌙 **Multiple Particle Types:** Render moons, stars, and traditional lanterns (fanous).
- ⚡ **High Performance:** Uses HTML5 Canvas for smooth 60fps rendering without DOM bloat.
- 🎨 **Highly Customizable:** Control size, speed, color, density, opacity, and glow.
- 📱 **Responsive:** Automatically resizes and adapts to the container or window screen.
- 💻 **TypeScript Ready:** Written entirely in TypeScript with full type definitions.
- 🚫 **Zero Dependencies:** Built with pure React and Canvas. No external animation libraries.

## Installation

```bash
npm install react-ramadan-lights
# or
yarn add react-ramadan-lights
# or
pnpm add react-ramadan-lights
```

## Basic Usage

To use `react-ramadan-lights`, simply import the component and render it inside a relatively positioned container (or let it fill the whole screen by setting `fillContainer={false}`).

```tsx
import React from 'react';
import { RamadanLights } from 'react-ramadan-lights';

const App = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#121212' }}>
      {/* 
        This will render falling moons, stars, and lanterns over the parent container.
      */}
      <RamadanLights />
      
      <div style={{ position: 'relative', zIndex: 10, color: '#fff', textAlign: 'center', paddingTop: '20vh' }}>
        <h1>Ramadan Kareem</h1>
      </div>
    </div>
  );
};

export default App;
```

## Advanced Customization

You can control exactly how the particles look and behave using props.

```tsx
<RamadanLights
  particleCount={60}
  speed={1.2}
  size={25}
  colors={["#FFD700", "#FFF5CC", "#E5A93C"]} // Gold and warm yellow tones
  types={["moon", "star", "lantern"]}
  opacity={0.8}
  glow={true}
  fillContainer={true}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `particleCount` | `number` | `50` | Number of particles to render |
| `speed` | `number` | `1.0` | Speed multiplier for the falling animation |
| `size` | `number` | `20` | Base maximum size of the particles (in pixels) |
| `colors` | `string[]` | `['#FFD700', ...]` | Array of hex/rgba colors applied randomly to particles |
| `types` | `ParticleType[]` | `['moon', 'star', 'lantern']` | Allowed types of particles |
| `opacity` | `number` | `0.8` | Base opacity of the particles (0 to 1) |
| `glow` | `boolean` | `true` | Whether particles emit a glowing shadow effect |
| `fillContainer` | `boolean` | `true` | If true, positions absolute to filling the parent. If false, positions fixed to the screen. |

## License

MIT

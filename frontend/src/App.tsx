import { useState } from 'react'
import { RamadanLights } from 'react-ramadan-lights'

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#121212', color: '#fff', margin: 0, padding: 0, overflow: 'hidden' }}>
      <RamadanLights 
        particleCount={60}
        speed={1.2}
        size={25}
        colors={["#FFD700", "#FFF5CC", "#E5A93C", "#FFFFFF"]}
        types={["moon", "star", "lantern"]}
        opacity={0.8}
        glow={true}
        fillContainer={true}
      />
      
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '30vh', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Ramadan Kareem!</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>react-ramadan-lights Demo</p>
      </div>
    </div>
  )
}

export default App

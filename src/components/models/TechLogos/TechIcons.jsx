import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Float, Environment } from '@react-three/drei'

// React Logo SVG Component
const ReactLogo = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <g fill="currentColor">
        <ellipse cx="32" cy="32" rx="6" ry="26" transform="rotate(0 32 32)"/>
        <ellipse cx="32" cy="32" rx="6" ry="26" transform="rotate(60 32 32)"/>
        <ellipse cx="32" cy="32" rx="6" ry="26" transform="rotate(120 32 32)"/>
        <circle cx="32" cy="32" r="4" fill="currentColor"/>
      </g>
    </svg>
  </div>
)

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight 
        position={[-5, 3, 2]} 
        intensity={0.4} 
        color="#62e0ff"
      />
      {/* Java-specific lighting */}
      {model.name === "Java Developer" && (
        <>
          <directionalLight 
            position={[3, -2, 4]} 
            intensity={0.6} 
            color="#ff6b35"
          />
          <pointLight 
            position={[0, 2, 0]} 
            intensity={0.3} 
            color="#ff8c42"
          />
        </>
      )}
      <Environment preset='city' />
      <Float 
        speed={3} 
        rotationIntensity={1} 
        floatIntensity={1.5}
        floatingRange={[-0.3, 0.3]}
      >
        <group>
          <primitive 
            object={scene.scene} 
            scale={model.scale || 0.5} 
            position={[0, 0, 0]} 
            rotation={model.rotation || [0, 0, 0]}
          />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcons

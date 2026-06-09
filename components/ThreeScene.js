import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import * as THREE from 'three'

function FloatingChart(){
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2
  })
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[0,0,0]}>
        <boxGeometry args={[2.2, 1.2, 0.12]} />
        <meshStandardMaterial color="#7dd3fc" metalness={0.6} roughness={0.2} />
        <Html center>
          <div className="glass p-3 text-slate-900" style={{width:220}}>
            <div className="text-sm font-semibold">Car Sales</div>
            <div className="text-xs mt-2">Interactive KPI mockup</div>
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

export default function ThreeScene(){
  return (
    <Canvas id="r3-canvas" camera={{ position: [0, 0, 8], fov: 50 }}>
      <color attach="background" args={[0.03,0.03,0.06]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10,10,10]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingChart />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

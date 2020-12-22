import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls } from "@react-three/drei"
import SantaDance from "./components/Santa-Dance"


export default function App() {
  return (
    <Canvas concurrent shadowMap camera={{ position: [0.25, 0, 2.5], fov: 50 }}>
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[-0.5, -1, 0]}>
        <Suspense fallback={null}>
          <SantaDance />
        </Suspense>
      </group>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}

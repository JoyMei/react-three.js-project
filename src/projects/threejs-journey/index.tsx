import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from './components/Model'
import Fireflies from './components/Fireflies'
import Loading from '../Loading'
import './styles.css'

export default function ThreejsJourney() {
  return (
    <Suspense fallback={<Loading/>}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [-4, 2, -4] }}>
        <color attach="background" args={['#1e2243']} />
        <Fireflies count={90} />
        <Model />
        <OrbitControls />
      </Canvas>
    </Suspense>
  )
}
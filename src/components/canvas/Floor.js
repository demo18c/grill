import React from 'react'

import { Suspense } from 'react'
import {
  Environment,
  MeshDistortMaterial,
  Plane,
  OrbitControls,
} from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
import { MeshStandardMaterial } from 'three'

// const M = MeshStandardMaterial

const Floor = () => {
  // const router = useStore((s) => s.router)
  // const { color } = useSpring({
  //   color: router.route === '/box' ? '#272727' : 'black',
  // })
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <Plane
        position={[0, -1, 0]}
        args={[100, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial attache='material' color='grey' />
        {/* <M factor={2} color='grey' /> */}
      </Plane>
      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default Floor

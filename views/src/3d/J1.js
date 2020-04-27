/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import J1Model from './j1.gltf'
import {useBox} from 'use-cannon'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, J1Model )
  const [ref, api] = useBox(() => ({ mass: 1, position: [ 0, 5, 0 ], ...props }))


  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <mesh
          ref={ref}
          material={materials.Carrosseriej1}
          geometry={nodes.J1.geometry}
          name="J1"
          scale={[0.5, 0.5, 0.5]}
        />
      </scene>
    </group>
  )
}

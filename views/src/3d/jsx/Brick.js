/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Brick(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/brick.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.shadeWhite} geometry={nodes.shadeWhite119.geometry} position={[0, 0.23, 0]} />
    </group>
  )
}

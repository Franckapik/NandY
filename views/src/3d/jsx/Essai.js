/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from 'use-cannon2'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/essai.gltf')
  const [cube, api] = useBox(() => ({
    mass: 10,
    args: [2,2,2]
  }));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh  ref={cube} material={materials.Material} geometry={nodes.Cube.geometry} position={[3.14, 0, 0]} />
      <mesh ref={cube}  material={materials.Material} geometry={nodes.Cube001.geometry} position={[-9.48, 0, 0]} />
      <mesh ref={cube}  material={materials.Material} geometry={nodes.Cube002.geometry} position={[-5.15, 0, 0]} />
      <mesh ref={cube} material={materials.Material} geometry={nodes.Cube003.geometry} position={[-1.08, 0, 0]} />
    </group>
  )
}
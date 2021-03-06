/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/ampoule.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Matcap jaune']} geometry={nodes['Sphere.011_0'].geometry} />
      <mesh material={materials['Matcap orange']} geometry={nodes['Sphere.011_1'].geometry} />
      <mesh material={materials['Matcap bleu fonce']} geometry={nodes['Sphere.011_2'].geometry} />
    </group>
  )
}

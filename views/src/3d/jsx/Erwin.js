/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import {useSelector} from 'react-redux'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useBox } from 'use-cannon'

export default function Model(props) {
  const group = useRef()
  const cloud = useRef()
  const [cloudBox, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
  
  const position = useSelector(state => state.profile.positionSocket)

  let keys = useSelector(state => state.keys)

  /*useFrame(()=> (
    keys.up && api.applyImpulse([0.5,0,0], [0,0,0])
  ))*/

  const { nodes, materials } = useLoader(GLTFLoader, '/erwin.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={cloudBox} material={materials.nuageMat} geometry={nodes.Cloud.geometry} position={[-14.08, 20.47, -6.8]}>
        <mesh material={materials.VolantMat} geometry={nodes.car_body000.geometry} position={[-6.02, -5.75, -10.56]} />
        <mesh material={materials.VolantMat} geometry={nodes.car_body015.geometry} position={[7.78, -5.75, -9.4]} />
        <mesh material={materials.VolantMat} geometry={nodes.Manche_volant.geometry} position={[-0.08, 13.37, 2.43]} />
      </mesh>
      <mesh material={materials['Erwin.001']} geometry={nodes.Erw_Body.geometry} position={[23.24, 19.31, 7.41]}>
        <mesh material={materials['Erwin.001']} geometry={nodes.Erw_Body003.geometry} position={[-1.56, 12.94, 1.36]} />
        <mesh material={materials['Erwin.001']} geometry={nodes.Erw_Glasses.geometry} position={[3.15, 12.73, -7.59]} />
        <mesh material={materials['Erwin.001']} geometry={nodes.Erw_Tie.geometry} position={[0.45, 0.22, -1.08]} />
        <mesh
          material={materials.MoustacheMat}
          geometry={nodes.Erw_Mustache.geometry}
          position={[4.66, 6.14, -11.31]}
        />
        <mesh
          material={materials['Material.001']}
          geometry={nodes.Paint_Can.geometry}
          position={[-16.19, -8.47, -1.63]}
        />
      </mesh>
    </group>
  )
}
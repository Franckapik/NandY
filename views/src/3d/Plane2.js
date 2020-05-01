import React from 'react'
import * as THREE from 'three';

export default function Plane2(props) {
  return (
    <mesh
  visible
  userData={{ test: 'hello' }}
  position={new THREE.Vector3(5, 0, -5)}
  rotation={new THREE.Euler(0, 0, 0)}
  geometry={new THREE.BoxBufferGeometry(10, 0.5, 10)}
  material={new THREE.MeshBasicMaterial({ color: new THREE.Color('#DC143C'), transparent: true })}
/>
)
}

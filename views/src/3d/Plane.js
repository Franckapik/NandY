import React from 'react'
import {usePlane} from 'use-cannon'

export default function Plane(props) {
  const [gg] = usePlane(() => ({ type: "static", position : [0,0,0], ...props }))
  return (<mesh ref={gg} receiveShadow="receiveShadow">
    <planeBufferGeometry attach="geometry" args={[5,5,0]}/>
    <meshStandardMaterial attach="material" color="crimson" />
  </mesh>)
}

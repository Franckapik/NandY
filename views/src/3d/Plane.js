import React from 'react'
import {usePlane} from 'use-cannon'

export default function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [ -Math.PI / 2, 0, 0 ], ...props }))
  return (<mesh ref={ref} receiveShadow="receiveShadow">
    <planeBufferGeometry attach="geometry" args={[1009, 1000]}/>
    <shadowMaterial attach="material" color="#171717"/>
  </mesh>)
}

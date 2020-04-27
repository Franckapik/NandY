import React, {useRef, useState, useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useBox} from 'use-cannon'
import useStore from '.././store/store'


export default function Cube(props) {
  //const doZeroVelocity = useRef(true);
  //useFrame(() => (doZeroVelocity.current && api.velocity.set(0, 0, 0)))

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)
  const [ref, api] = useBox(() => ({ mass: 5, position: [ 0, 5, 0 ],  ...props }))
  const { x, y } = useStore()


  return (<mesh
    receiveShadow="receiveShadow"
    castShadow="castShadow"
    ref={ref}
    onClick={() => {api.velocity.set(0,10,0); setActive(!active)}}
    >
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color={active ? 'hotpink' : 'orange'}/>
  </mesh>)
}

import React, {useState} from 'react'
import {useBox} from 'use-cannon'


export default function Cube(props) {
  //const doZeroVelocity = useRef(true);
  //useFrame(() => (doZeroVelocity.current && api.velocity.set(0, 0, 0)))

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)
  const [ref, api] = useBox(() => ({ mass: 5, position: [ 0, 5, 0 ],  ...props }))

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

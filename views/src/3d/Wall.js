import React from 'react'
import {useFrame} from 'react-three-fiber'
import {useBox} from 'use-cannon'


export default function Wall(props) {
  const [ref, api] = useBox(() => ({ type:"static", args : [0.5,0.25,0.05],  ...props }))
  useFrame(({clock})=> {
    api.position.set(Math.sin(clock.getElapsedTime() * Math.PI) * 2, 0.25, props.y)
  });

  return (<mesh ref={ref} >
    <boxBufferGeometry attach="geometry" args={[1,0.5,0.1]}  />
    <meshLambertMaterial attach="material" color={props.color} />
  </mesh>)
}

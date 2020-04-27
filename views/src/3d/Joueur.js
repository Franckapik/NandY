import React, {useRef, useState, useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useBox} from 'use-cannon'
import useStore from '.././store/store'


export default function Joueur(props) {
  const { x, y , reset } = useStore()

  const [ref, api] = useBox(() => ({ mass: 1, args:[0.1,0.1,0.1], ...props, onCollide: (e) => {reset(); console.log("hey");}}))
  useFrame(()=> api.position.set(y,0.10,x));

  return (<mesh ref={ref} >
    <boxBufferGeometry attach="geometry" args={[0.2,0.2,0.2]}  />
    <meshLambertMaterial attach="material" color={props.color} />
  </mesh>)
}

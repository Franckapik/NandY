import React, {useRef, useState, useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useBox} from 'use-cannon'
import useStore from '.././store/store'


export default function Joueur(props) {
  const {connected, currentId, players, playersList, set, win, reset } = useStore()
  let x = 0;
  let y = 0;

 if (connected) {
   x = playersList[currentId].x;
   y = playersList[currentId].y;
 }
  const hasCollided = useRef(false);
  const [ref, api] = useBox(() => ({ type : "dynamic", mass :1, args:[0.1,0.1,0.1], ...props, onCollide: e => hasCollided.current && win() && reset()}))
  useFrame(()=> api.position.set(y,0.10,x));

  return (<mesh ref={ref} >
    <boxBufferGeometry attach="geometry" args={[0.2,0.2,0.2]}  />
    <meshLambertMaterial attach="material" color={props.color} />
  </mesh>)
}

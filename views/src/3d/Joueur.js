import React, {useRef, useState, useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useBox, useSphere} from 'use-cannon'
import useStore from '.././store/store'


export default function Joueur(props) {
  const { connected, currentId, players, playersList, set, win, reset } = useStore()
  let x = 0;
  let y = 0;

  if (connected) {
    x = playersList[currentId].x;
    y = playersList[currentId].y;
  }
  const [ hasCollided, setHasCollided ] = useState(false)
  const addScore = () => {
    console.log(hasCollided);
    setHasCollided(true)
    console.log("stop");
    win()
  }
  const [ref, api] = useSphere(() => ({
    type: "dynamic",
    mass: 10,
    position: [0,0.2,0],
    angularDamping:1,
    //linearDamping:1,
    allowSleep:false,
    //sleepSpeedLimit: 1,
    //sleepTimeLimit: 2,
    //collisionFilterGroup: 1,
    //collisionFilterMask: 2,
    //fixedRotation: true,
    onCollide: e => {!hasCollided && addScore()}
  }))

  useFrame(() => {
    //api.position.set(y, 0.10, x)
    api.applyLocalImpulse([x,0,y], [0,2,0]);

  }

);

  return (<mesh ref={ref}>
    <sphereGeometry attach="geometry" args={[0.2, 0.2, 0.2]} />
    <meshLambertMaterial attach="material" color={props.color}/>
  </mesh>)
}

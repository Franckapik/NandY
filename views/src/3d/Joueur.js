import React, {useState} from 'react'
import {useFrame} from 'react-three-fiber'
import {useSphere} from 'use-cannon'
import useStore from '.././store/store'


export default function Joueur(props) {
  const { connected, currentId, playersList, win } = useStore()
  let x = 0;
  let y = 0;

  if (connected) {
    x = playersList[currentId].x;
    y = playersList[currentId].y;
  }
  const [ hasCollided, setHasCollided ] = useState(false)
  const addScore = () => {
    setHasCollided(true)
    win()
  }
  const [ref, api] = useSphere(() => ({
    type: "dynamic",
    mass: 10,
    position: [0,10,20],
    radius : 1,
    angularDamping:0.1,
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
    api.applyLocalImpulse([y,0,x], [0,1,0]);

  }

);

  return (<mesh ref={ref}>
    <sphereGeometry attach="geometry" radius={1} />
    <meshLambertMaterial attach="material" color={props.color}/>
  </mesh>)
}

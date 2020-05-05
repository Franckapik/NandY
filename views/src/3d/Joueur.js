import React, {useState, useRef} from 'react'
import {useFrame, Dom} from 'react-three-fiber'
import {useSphere} from 'use-cannon'
import {useStoreState} from 'easy-peasy'


export default function Joueur(props) {
  const [ hasCollided, setHasCollided ] = useState(false)
  const currentId = useStoreState(state => state.currentId);
  const y = useStoreState(state => state.findInPlayers("y", props.id))
  const x = useStoreState(state => state.findInPlayers("x", props.id))
  
  const [ref, api] = useSphere(() => ({
    type: "dynamic",
    mass: 10,
    radius : 0.2,
    angularDamping:0.1,
    position : props.position,
    linearDamping:0.5,
    angularDamping:0.5,
    allowSleep:false,
    //sleepSpeedLimit: 1,
    //sleepTimeLimit: 2,
    //collisionFilterGroup: 1,
    //collisionFilterMask: 2,
    //fixedRotation: true,
    onCollide: e => {setHasCollided(true)}
  }))

  useFrame(() => {
    //api.position.set(1,1,1)   
    
   api.applyImpulse([x,0,y], [0,1,0]);

  }

);

  return (<mesh ref={ref} >
    <sphereGeometry attach="geometry" radius={1} />
    <meshLambertMaterial attach="material" color={props.color}/>
  </mesh>)
}

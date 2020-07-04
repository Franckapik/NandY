import {useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useSphere} from 'use-cannon'
import { useSelector } from "react-redux";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper"
import { useHelper } from "drei"
import store from '../store/store'




export default function useMouvement() {

  let force = useSelector((state) => state.keyboard.force);
  let rotation = useSelector((state) => state.keyboard.rotation);



  const [ref, api] = useSphere(() => ({
    position : [0,3,0],
    type: "dynamic",
    mass: 10,
    radius : 0.2,
    linearDamping:0.5,
    angularDamping:0.5,
    allowSleep:false,
    //sleepSpeedLimit: 1,
    //sleepTimeLimit: 2,
    //collisionFilterGroup: 1,
    //collisionFilterMask: 2,
    //fixedRotation: true,
  }))

  useHelper(ref, VertexNormalsHelper, 1, "#272740")


  useFrame(() => {
    //api.position.set(1,1,1)   
   api.applyImpulse([rotation,0,force], [0,1,0]);
  }

);

useEffect(
  () =>
    api.position.subscribe((position) =>
      store.dispatch({ type: "EDWIN POSITION", position: position })
      
    ),
  []
);
useEffect(
  () =>
    api.velocity.subscribe((velocity) =>
      store.dispatch({ type: "EDWIN VELOCITY", velocity: velocity })
    ),
  []
);

 return ref
}

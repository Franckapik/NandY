import {useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useSphere} from 'use-cannon2'
import { useSelector } from "react-redux";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper"
import { useHelper } from "drei"
import useStore from '../store/zstore';




export default function useMouvement() {

  let force = useStore(state => state.force)
  let rotation = useStore(state => state.rotation)
  let changePosition = useStore(state => state.changePosition)
  let changeVelocity = useStore(state => state.changeVelocity)


  const [ref, api] = useSphere(() => ({
    position : [0,3,0],
    type: "dynamic",
    mass: 10,
    radius : 2,
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
    changePosition(position)
    ),
  []
);
useEffect(
  () =>
    api.velocity.subscribe((velocity) =>
    changeVelocity(velocity)
    ),
  []
);

 return ref
}

import {useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useSphere} from 'use-cannon'
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper"
import { useHelper } from "drei"
import useStore from '../store/zstore';




export default function useMouvement(position) { 

  let force = useStore(state => state.force)
  let rotation = useStore(state => state.rotation)
  let changePosition = useStore(state => state.changePosition)
  let changeVelocity = useStore(state => state.changeVelocity)


  const [ref, api] = useSphere(() => ({
    position : [-6,4,70], //how to retrieve characterPos in glb file?
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
   window.v = position;
  }

);

useEffect(
  () =>
    api.position.subscribe((position) =>
    changePosition(position)
    ),
  [api, changePosition]
);
useEffect(
  () =>
    api.velocity.subscribe((velocity) =>
    changeVelocity(velocity)
    ),
  [api, changeVelocity]
);

 return ref
}

import React, { useRef } from 'react'
import { useLoader, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from 'use-cannon'
import store from '../../store/store'

export default function Model(props) {
  const group = useRef()
  const { nodes } = useLoader(GLTFLoader, '/base.gltf')
  const { camera } = useThree();

  const [base, api] = useBox(() => ({
    mass : 0,
    args : [10,10,10],
    position : props.position,
    onCollide: e => { 
      let a = base.current.position.setY(5)
      store.dispatch({ type: "CAMERA TARGET", target: a })
      store.dispatch({ type: "CAMERA DEFAULTTARGET", defaultTarget: false})
      camera.position.set(-25,10,-15) 
     
      console.log(a);
      
 }
    
  }))
  return (
    <group ref={group} dispose={null}>
      <mesh onClick={() => console.log(base.current.position)
      } ref={base} material={nodes.Base.material} geometry={nodes.Base.geometry}  />
    </group>
  )
}

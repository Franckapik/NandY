import React, {useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import store from '../store/store'
import {useSelector, useDispatch} from 'react-redux'

export default function Controls() {
  const controlsRef = useRef();
  window.controls = controlsRef.current
  const { scene, camera, gl } = useThree();
  const orbitEnable = false;
  //const orbitEnable = useSelector(state => state.orbitEnable)

  useFrame(() => {
    controlsRef.current && controlsRef.current.update()

  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate
      enabled={orbitEnable}
     // enablePan={false}
     // maxDistance={100}
      //minDistance={5}
      //minPolarAngle={Math.PI / 6}
     // maxPolarAngle={Math.PI / 2}
    />
  );
}

import * as THREE from "three";
import React, {useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import useStore from "../store/zstore";


export default function Controls() {
  const controlsRef = useRef();
  window.controls = controlsRef.current
  const { scene, camera, gl, mouse, raycaster } = useThree();

  const position = useStore(state => state.position)
  const orbit = useStore(state => state.orbit)
  const target = useStore(state => state.target)


  useFrame(() => {
    let c = new THREE.Vector3().fromArray(position)
    window.mouse = mouse;
    window.c = c ;
    camera.position.x = 10;
    camera.translateZ(c.z)
    if(defaultTarget) {
      controlsRef.current.target = c;
    }
    controlsRef.current && controlsRef.current.update()
    window.camera = camera
    window.ray = raycaster
  });


  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate={false}
      enableDamping
      dampingFactor={0.1}
      enabled={orbit}
      enableKeys={false}
      target={target}
      enablePan = {false}
      enableZoom
      maxDistance={100}
      minDistance={20}
      zoomSpeed={5}
      minPolarAngle={Math.PI/6}
      maxPolarAngle={Math.PI/2.5}
      mouseButtons = {{ LEFT : 2}}
    />
  );
}

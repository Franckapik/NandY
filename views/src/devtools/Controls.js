import * as THREE from "three";
import React, {useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import store from '../store/store'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';


export default function Controls() {
  const controlsRef = useRef();
  window.controls = controlsRef.current
  const { scene, camera, gl, mouse, raycaster } = useThree();

  const orbitEnable = useSelector(state => state.camera.orbitEnable)
  const erwin = useSelector((state) => state.profile.position);
  const target = useSelector((state) => state.camera.target);
  const defaultTarget = useSelector((state) => state.camera.defaultTarget);
  let cameraState = useSelector((state) => state.camera);


  //camera.position.x = 20;
  useFrame(() => {

    //console.log(erwin);
    let c = new THREE.Vector3().fromArray(erwin)
    window.mouse = mouse;
    window.c = c ;
    //let a = {x : 0, y : 0, z : 0}
    //let d = c.distanceTo(a);
    // y = 20 -d 
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
      enabled={orbitEnable}
      enableKeys={false}
      target={target}
      enablePan = {false}
      enableZoom
      maxDistance={cameraState.maxDistance}
      minDistance={cameraState.minDistance}
      zoomSpeed={5}
      minPolarAngle={cameraState.minPolarAngle}
      maxPolarAngle={cameraState.maxPolarAngle}
      mouseButtons = {{ LEFT : 2}}
    />
  );
}

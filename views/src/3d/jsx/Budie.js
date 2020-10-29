import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Budie(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/ia.glb', draco('/draco-gltf/'))

  const actions = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = {
      Follow: mixer.clipAction(animations[0], group.current),
      Walk: mixer.clipAction(animations[1], group.current),
    }
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1.34, 0.1]}>
        <primitive object={nodes.Body} />
        <primitive object={nodes.HancheL} />
        <primitive object={nodes.HancheR} />
        <skinnedMesh
          material={materials['budieMat.002']}
          geometry={nodes.BudieMesh.geometry}
          skeleton={nodes.BudieMesh.skeleton}
        />
      </group>
    </group>
  )
}


{/*

var points = [

  [17.34078598022461, -0.9215879440307617, 0.0] ,
[17.34078598022461, -13.85114574432373, 0.0] ,
[2.084975242614746, -13.85114574432373, 0.0] ,
[-8.412137031555176, -13.85114574432373, 0.0] ,
[-8.412137031555176, -5.472794532775879, 0.0] ,
[-8.412137031555176, 0.0, 0.0] ,
[-2.0, 0.0, 0.0] ,
[-1.0, 0.0, 0.0] ,
[0.0, 0.0, 0.0] ,
[1.0, 0.0, 0.0] ,
[2.0, 0.0, 0.0] 

]

var scale = 5;

for (var i = 0; i < points.length; i++) {
  var x = points[i][0] * scale;
  var y = points[i][1] * scale;
  var z = points[i][2] * scale;
  points[i] = new THREE.Vector3(x, z, -y);
}

var curvePath =  new THREE.CatmullRomCurve3(points);
var radius = .25;

var percentage = 0;
var prevTime = Date.now();

function MoveCamera() {
  percentage += 0.00095;
  var p1 = curvePath.getPointAt(percentage % 1);
  var p2 = curvePath.getPointAt((percentage + 0.01) % 1);

  camera.position.x = p1.x;
  camera.position.y = p1.y + 1.75;
  camera.position.z = p1.z;
  camera.lookAt(p2.x, p2.y + 1.5, p2.z);
}

*/}



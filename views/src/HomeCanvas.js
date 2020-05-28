import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import {Canvas, extend, Dom, useFrame, useThree} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Controls from './render/Controls'
import Pave from './3d/Pave'
import Jeep from './3d/Jeep'
import Scene from './3d/Scene'
extend({OrbitControls})


const Plane3 = (props) => {
  return (
    <mesh> 
      <planeBufferGeometry attach="geometry" args={[2,2,10,10]} />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
   
  )
}



const HomeCanvas = () => {
  var dir = new THREE.Vector3( 1, 1, 1 );
  var origin = new THREE.Vector3( 0, 0, 0 );
  var length = 5;
  var hex = "blue";
  var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );

return (
<div className="canvas">
<Canvas camera={{ position: [ 0, -100, 100 ], fov: 50 }}>

<primitive object={arrowHelper} position={[0, 0, 0]} />
    <color attach="background" args={["FF693B"]}/>
    <spotLight position={[0, 0, 100]} intensity={3} castShadow="castShadow"/>
    <Controls />
    <Suspense fallback={<Dom>loading...</Dom>}>
      <Scene />
    </Suspense>
  </Canvas>
</div>  
)
}

export default HomeCanvas;

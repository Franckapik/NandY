import React, {useState, Suspense} from 'react'
import {Canvas, extend, Dom} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//import Scene from './render/Scene'
import Cube from './3d/Cube'
//import BoxHover from './3d/BoxHover'
import Plane from './3d/Plane'
import Plane2 from './3d/Plane2'
import Jeep from './3d/Jeep'
//import Controls from './render/Controls'
extend({OrbitControls})

const Canvas3D = ({canvas}) => {
  return (<div className="canvas">
    {
      canvas === "c1" ?
      <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 10, 0 ], fov: 50 }}>
        <color attach="background" args={['lightblue']}/>
        <hemisphereLight intensity={0.35}/>
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow="castShadow"/>
        <Physics>
          <Plane/>
          <Cube/>
          <Cube position={[0, 10, -2]}/>
          <Cube position={[0, 20, -2]}/>
        </Physics>
      </Canvas> : null
    }
    {
      canvas === "c2" ?
      <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 10, 8, 10 ], fov: 50 }}>
        <color attach="background" args={['darkslateblue']}/>
        <spotLight position={[6, 40, -1]} angle={0.3} intensity={0.8} castShadow="castShadow"/>
        <gridHelper args={100,100} />
          <Plane2/>
          <Suspense fallback={<Dom>loading...</Dom>}>
            <Jeep rotation={[0,Math.PI,0]} scale={[0.40,0.5,0.5]} position={[6,3,-1]} />
          </Suspense>
      </Canvas> : null
    }

  </div>);
}

export default Canvas3D;

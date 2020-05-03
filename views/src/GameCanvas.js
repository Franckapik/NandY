import React from 'react'
import {Canvas, extend} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//import Scene from './render/Scene'
import Controls from './render/Controls'
//import BoxHover from './3d/BoxHover'
import Plane from './3d/Plane'
import Joueur from './3d/Joueur'
import Wall from './3d/Wall'
import Keyboard from './render/Keyboard'


extend({OrbitControls})

const GameCanvas = ({canvas}) => {

return (
  <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 50, 10 ], fov: 50 }}>
    <color attach="background" args={['lightblue']}/>
    <spotLight position={[10, 200, 10]} angle={1} penumbra={0} intensity={1} castShadow="castShadow"/>
    <Controls />
    <Keyboard></Keyboard>
    <Physics
    gravity={[0,-10,0]}
    defaultContactMaterial={
      {friction : 10}
    }
     >
      <Plane rotation = {[-Math.PI/2, 0 ,0]}/>
    { /* <Joueur position={[ 0.5, 3, 2 ]} color={"red"} />*/}
      <Joueur castShadow receiveShadow number= {2} position={[ -0.5, 3, 2 ]} color={"blue"} />

    </Physics>
  </Canvas>
)
}

export default GameCanvas;

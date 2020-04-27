import React, {useState, Suspense, useEffect, useRef} from 'react'
import {Canvas, extend, Dom, useFrame} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//import Scene from './render/Scene'
import Controls from './render/Controls'
import Cube from './3d/Cube'
//import BoxHover from './3d/BoxHover'
import Plane from './3d/Plane'
import Plane2 from './3d/Plane2'
import Jeep from './3d/Jeep'

import useStore from './store/store'

import J1 from './3d/J1'
import Sol from './3d/Sol'


import Game from './3d/Game'
import Game_old from './3d/Game_old'
import {socket} from './Socket'

import Keyboard from './render/Keyboard'


extend({OrbitControls})




const Counter= (props) => {

  const { count, inc, dec } = useStore()

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>up</button>
      <button onClick={dec}>down</button>
    </div>
  )
}




const Canvas3D = ({canvas}) => {

const {x} = useStore()

const [connected, setConnected] = useState(false);
const [players, setPlayers] = useState([]);

useEffect(() => {
   socket.emit('event', 'Bonjour');
   socket.on('connected', (data) => {setConnected(true); setPlayers(data) });
   socket.on('disconnect', (data) => {setPlayers(data) });
}, []);


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
    {
      canvas === "c3" ?
      <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 10, 0 ], fov: 50 }}>
        <color attach="background" args={['lightblue']}/>
        <hemisphereLight intensity={0.35}/>
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow="castShadow"/>
        <Physics>
          <Plane/>
          <Cube/>
          <Dom>      <div>
          { connected ? (
               <div><p>Utilisateurs connectés : {players.length ? players.map((a, i)=> {return (<p>{a}</p>)}) : "aucun"}</p>
               <p><Counter></Counter></p></div>
          ) : (
               <p>Not connected yet...</p>
          ) }
      </div></Dom>
        </Physics>
      </Canvas> : null
    }
    {
      canvas === "c4" ?
      <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 10, 0 ], fov: 50 }}>
        <color attach="background" args={['lightblue']}/>
        <hemisphereLight intensity={0.35}/>
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow="castShadow"/>
        <Keyboard></Keyboard>
        <Physics>
          <Plane/>
          <Cube />
        </Physics>
      </Canvas> : null
    }
    {
      canvas === "c5" ?
      <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 5, 40 ], fov: 50 }}>
        <color attach="background" args={['lightblue']}/>
        <spotLight position={[10, 200, 10]} angle={1} penumbra={0} intensity={1} castShadow="castShadow"/>
        <Keyboard></Keyboard>
        <Controls />
        <Physics>
          <Game></Game>
        </Physics>
      </Canvas> : null
    }


  </div>);
}

export default Canvas3D;

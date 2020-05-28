import React from 'react'
import {Canvas, extend, Dom} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//import Scene from './render/Scene'
import Controls from './render/Controls'
//import BoxHover from './3d/BoxHover'
import Plane from './3d/Plane'
import Joueur from './3d/Joueur'
//import Wall from './3d/Wall'
import { StoreProvider, useStoreState, useStore, useStoreActions } from 'easy-peasy';
import store from './store/store';



extend({OrbitControls})

const GameCanvas = () => {
  const isLoggedIn = useStoreState(state => state.isLoggedIn)
  const players = useStoreState(state => isLoggedIn && Object.entries(state.players))
  const currentId = useStoreState(state => isLoggedIn && state.currentId);
  const y = useStoreState(state => isLoggedIn && state.findInPlayers("y", currentId))
  const x = useStoreState(state => isLoggedIn && state.findInPlayers("x", currentId))
 // const Pos = useStoreState(state => isLoggedIn && state.findInPlayers("position", currentId))


return (
isLoggedIn ? 
<div className="canvas">
<Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{ alpha: false }} camera={{ position: [ 0, 50, 10 ], fov: 50 }}>
    <StoreProvider store={store}> 
    <color attach="background" args={['lightblue']}/>
    <spotLight position={[10, 200, 10]} angle={1} penumbra={0} intensity={1} castShadow="castShadow"/>
    <Controls />
    <Physics gravity={[0,-10,0]} defaultContactMaterial={ {friction : 10} } >
      <Plane rotation = {[-Math.PI/2, 0 ,0]}/>
{players.map((p,i) => {
  return (
    <Joueur 
    castShadow receiveShadow  
    position= {[1 + i * 3,5,1]} 
    id={p[0]} 
    color={"blue"} />
  )
})}
    </Physics>
    </StoreProvider>
  </Canvas>

</div>


  :"Chargement du canvas"
  
)
}

export default GameCanvas;

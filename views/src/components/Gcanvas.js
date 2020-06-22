import React, { Suspense, useRef } from "react";
import { Canvas, extend, Dom, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Controls from "../devtools/Controls";
import Master from "../3d/jsx/Rails.js";
import Erwin from '../3d/jsx/Erwin.js'
import Rails from '../3d/jsx/Rails.js'
import Essai from '../3d/jsx/Essai.js'
import store from "../store/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import Camera from '../devtools/Camera';
import { Physics } from 'use-cannon'

extend({ OrbitControls });

function Gcanvas() {
  return (
    <Provider store={store}>
      <ForwardCanvas>
        <Scene />
      </ForwardCanvas>
    </Provider>
  );
}

function Scene() {
  return (
    <Suspense fallback={<Dom>loading...</Dom>}>
      <color attach="background" args={["orange"]} />
      {/*<fog attach="fog" args={["grey", 5, 50]} />*/}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[10, 200, 10]}
        angle={1}
        penumbra={0}
        intensity={0.2}
        castShadow="castShadow"
      />
      <Controls />
      <Camera />
      <Physics 
      friction = {0.5}
      restitution = {0.3
      }>
{/*     <Rails />
        <Erwin />*/}
        <Essai />
      </Physics>
    </Suspense>
  );
}

function ForwardCanvas({ children }) {
  return (
    <div className="canvas">
      <Canvas>
        <Provider store={store}>{children}</Provider>
      </Canvas>
    </div>
  );
}

export default Gcanvas;

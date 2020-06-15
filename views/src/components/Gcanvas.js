import React, { Suspense, useRef } from "react";
import { Canvas, extend, Dom, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Controls from "../devtools/Controls";
import Master from "../3d/jsx/Master.js";
import store from "../store/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import Camera from '../devtools/Camera';

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
      <color attach="background" args={["purple"]} />
      <fog attach="fog" args={["grey", 5, 50]} />
      <directionalLight
        position={[10, 200, 10]}
        angle={1}
        penumbra={0}
        intensity={0.2}
        castShadow="castShadow"
      />
      <Controls />
      <Camera />
      <Master />
    </Suspense>
  );
}

function ForwardCanvas({ children }) {
  return (
    <div className="canvas">
      <Canvas
        shadowMap="shadowMap"
        sRGB="sRGB"
        gl={{ alpha: false, antialias: false }}
      >
        <Provider store={store}>{children}</Provider>
      </Canvas>
    </div>
  );
}

export default Gcanvas;

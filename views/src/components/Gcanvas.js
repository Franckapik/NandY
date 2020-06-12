import React, { Suspense, useRef } from "react";
import { Canvas, extend, Dom, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Controls from "../devtools/Controls";
import Master from "../3d/jsx/Master.js";
import store from "../store/store";
import { Provider, useSelector, useDispatch } from "react-redux";

extend({ OrbitControls });

function Dolly() {
  useFrame(({ camera }) => {
    //camera.lookAt(10, 0, 0);
    let positionEdwin = store.getState().profile.position;

    // camera.position.x = positionEdwin.x ;
    // camera.position.y = positionEdwin.y ;
    // camera.position.z = positionEdwin.z ;
    // camera.lookAt(Object.values(positionEdwin))
    window.camera = camera;
  });

  return null;
}

const Gcanvas = () => {
  const cam = useRef();
  const orbitEnable = useSelector(state => state.orbitEnable)

  return (
    <div className="canvas">
      <Canvas
        shadowMap="shadowMap"
        sRGB="sRGB"
        gl={{ alpha: false, antialias: false }}
      >
        <camera ref={cam} position={[0, 0, 10]} />
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
        <Suspense fallback={<Dom>loading...</Dom>}>
          <Master />
          <Dolly />
        </Suspense>
      </Canvas>
    </div>
  )
};

export default Gcanvas;

import React, { Suspense } from "react";
import Arcade from "../3d/jsx/Arcade";
import Plane from "../3d/jsx/Plane.js";
import Joueur from "../3d/jsx/Joueur";
import Base from "../3d/jsx/Base.js";
import store from "../store/store";
import Cube from "../3d/jsx/Cube";
import { Provider, useSelector } from "react-redux";
import { Physics } from "use-cannon";
import SphereComp from "../3d/jsx/Sphere";
import { ForwardCanvas } from "./ForwardCanvas";
import { Carnet } from "./Carnet";
import Camera from "../devtools/Camera";
import TextPerso from "../3d/jsx/Text";
import { ItemsList } from "./ItemsList";
import { BrickWall } from "./BrickWall";
import { HTML } from "drei";
import All from "../3d/jsx/All"

function Gcanvas() {
  return (
    <Provider store={store}>
      <div className="flex_c">
        <ForwardCanvas>
          <Main />
        </ForwardCanvas>
        <Board />
      </div>
    </Provider>
  );
}

const Board = (props) => {
  const listeItems = useSelector((state) => state.carnet.items);
  return (
    <ul className="board">
      {listeItems.map((a, i) => {
        return <li key={i}>{a.id}</li>;
      })}
    </ul>
  );
};


function Main() {
  let cPosition = useSelector((state) => state.camera.position);
  const distance = 30;

  return (
    <Suspense fallback={<HTML>loading...</HTML>}>
      <color attach="background" args={["orange"]} />
      {/*<fog attach="fog" args={["grey", 5, 50]} />*/}
      {/*<lensFlare size={512} color={'purple'}/>*/}
      <ambientLight intensity={1} />
      <axesHelper />
      <Carnet />
      <Camera />
      <TextPerso txt={"Salut c est moi!"} position={[-10, 20, -10]} />
      <All />
      <Physics allowSleep={true} friction={0.5} restitution={0.3}>
        <ItemsList />
        <BrickWall number={5} position={[40, 5, 40]} />
        <Base position={[distance, 1, -distance]} />
        <Base position={[-distance, 1, -distance]} />
        <Base position={[distance, 1, -distance * 2]} />
        <Base position={[-distance, 1, -distance * 2]} />
        <Arcade position={[-distance, 1, -distance]} rotation={[0, 0, 0]} />
        <SphereComp position={[0, 0, 20]} />
        <Joueur />
        <Cube position={[0, 0, 10]} />
        <Plane />
        {/*     <Rails />
        <Erwin />*/}
      </Physics>
    </Suspense>
  );
}

export default Gcanvas;

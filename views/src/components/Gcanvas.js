import React, { Suspense } from "react";
import Plane from "../3d/jsx/Plane.js";
import Joueur from "../3d/jsx/Joueur";
import { Physics } from "use-cannon";
import Camera from "../devtools/Camera";
import PanneauInfos from "../3d/jsx/PanneauInfos";
import { HTML } from "drei";
import All from "../3d/jsx/All";
import { Controls, useControl } from "react-three-gui";
import Video from "./Video";
import Radio from "../3d/jsx/Radio";
import CrateCreator from "../3d/jsx/CrateCreator";
import { CrateList } from "./CrateList";
import MsgList from "../3d/jsx/MsgList";
import Button from "../3d/jsx/Button";
import IdeaList from "../3d/jsx/IdeaList";
import { useFrame } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useStore from '../store/zstore'
import PopList from "./PopList.js";
import { Canvas } from 'react-three-fiber';
import Budie from '../3d/jsx/Budie';
import Brick from "../3d/jsx/Brick.js";


const Gcanvas = () => {
  return (
      <div className="flex_c">
        <div className="canvas"><Main /></div>
        <PopList />
        <Controls/>
      </div>
  );
}





const SetEmptyPosition = (props) => {
  let videoPos = useStore(state => state.videoPos);
  const { nodes } = useLoader(GLTFLoader, "/empty.gltf");

  useFrame(() => {
    videoPos.current = nodes.OriginMovie.position; //empty.getWorldPosition()
  });

  return null;
};

const Main = () => {
  
  let videoPos = useStore((state) => state.videoPos.current);

  const ambientLight = useControl("AmbientLight", {
    type: "number",
    value: 1,
  });
  const bgColor = useControl("BG Color", { type: "color", value: "#264653" });

  return (
    <Canvas>
    <Suspense fallback={<HTML>loading...</HTML>}>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" args={[bgColor, 5, 100]} />
      {/*<lensFlare size={512} color={'purple'}/>*/}
      <ambientLight intensity={ambientLight} />
      <axesHelper />
      <Camera />
      <Budie position={[5,0,0]} />
      <All />

      <Brick />
      <CrateCreator />
      <SetEmptyPosition />
      <PanneauInfos position={[32, 3, 22]} />
      <Radio url={"/sample.mp3"} />
      <Video
        url={"/TestSite.mp4"}
        rotation={[0, Math.PI, 0]}
        position={videoPos}
      />
      <Physics allowSleep={true} friction={0.5} restitution={0.3}>
        <Joueur />
        <Plane />
        <MsgList />
        <CrateList />
        <IdeaList position={[29, 8, 66]} />
        <Button position={[29, 1.32, 74]} content={"idea"} />
        <Button position={[0.53, 1.32, -34]} content={"msg"} />
      </Physics>
    </Suspense>
    </Canvas>
  );
}

export default Gcanvas;

import { HTML, Sky } from "drei";
import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { Controls, useControl } from "react-three-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Physics } from "use-cannon";
import { Active, CollisionBlocks, NavMesh, Passive, Traversant } from "../3d/jsx/All2";
import Button from "../3d/jsx/Button";
import CrateCreator from "../3d/jsx/CrateCreator";
import IdeaList from "../3d/jsx/IdeaList";
import Joueur from "../3d/jsx/Joueur";
import MsgList from "../3d/jsx/MsgList";
import PanneauInfos from "../3d/jsx/PanneauInfos";
import Plane from "../3d/jsx/Plane.js";
import Radio from "../3d/jsx/Radio";
import Sol from "../3d/jsx/Sol.js";
import Town from "../3d/jsx/Town.js";
import { TargetMesh, VehicleMesh } from "../3d/jsx/TryYuka.js";
import Camera from "../devtools/Camera";
import { Manager } from '../devtools/useYukaFollowRegion.js';
import useStore from '../store/zstore';
import { CrateList } from "./CrateList";
import PopList from "./PopList.js";
import Video from "./Video";




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
    value: 0.5,
  });
  const bgColor = useControl("BG Color", { type: "color", value: "#264653" });

  return (
    <Canvas>
    <Suspense fallback={<HTML>loading...</HTML>}>
      <color attach="background" args={[bgColor]} />
      <fogExp2 attach="fog" args={['black', 0.03]} />
      {/*<lensFlare size={512} color={'purple'}/>*/}
      <ambientLight intensity={ambientLight} />
      <axesHelper />
      <Camera />
      <Sol />
      <Sky
        distance={3000} 
        turbidity={2} 
        rayleigh={4} 
        mieCoefficient={0.038} 
        mieDirectionalG={0.85} 
        sunPosition={[Math.PI, -10, 0]}
        exposure = {5}
        azimuth={0.5}
        />

      
      <Town />
      <CrateCreator />
      <SetEmptyPosition />
      <PanneauInfos position={[32, 3, 22]} />
      <Radio url={"/sample.mp3"} />
      <Video
        url={"/TestSite.mp4"}
        rotation={[0, Math.PI, 0]}
        position={videoPos}
      />
      <Traversant />
      <NavMesh />
     <Manager>
     <VehicleMesh name="Vehicle" />
      <TargetMesh name="Target" position={[0,10,-12]} />
     </Manager>
      <Physics allowSleep={true} friction={0.5} restitution={0.3}>
      <Passive />
      <CollisionBlocks />
      <Active />
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

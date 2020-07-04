import React, { Suspense } from "react";
import Arcade from "../3d/jsx/Arcade";
import Plane from "../3d/jsx/Plane.js";
import Joueur from "../3d/jsx/Joueur";
import store from "../store/store";
import { Provider, useSelector } from "react-redux";
import { Physics } from "use-cannon";
import SphereComp from "../3d/jsx/Sphere";
import { ForwardCanvas } from "./ForwardCanvas";
import { Carnet } from "./Carnet";
import Camera from "../devtools/Camera";
import PanneauInfos from "../3d/jsx/PanneauInfos";
import { ItemsList } from "./ItemsList";
import { BrickWall } from "./BrickWall";
import { HTML } from "drei";
import All from "../3d/jsx/All";
import { Controls, useControl } from "react-three-gui";
import Video from "./Video";
import Radio from "../3d/jsx/Radio";
import Pop from "./Pop";
import { GiveMessage } from "./Modal/GiveMessage";
import { GiveIdea } from "./Modal/GiveIdea";
import { GiveInfo } from "./Modal/GiveInfo";
import { ShowMessage } from "./Modal/ShowMessage";
import { ShowIdea } from "./Modal/ShowIdea";
import { useSphere } from "use-cannon";
import CrateCreator from "../3d/jsx/CrateCreator";
import { CrateList } from "./CrateList";
import MsgList from "../3d/jsx/MsgList";
import Button from "../3d/jsx/Button";
import IdeaList from "../3d/jsx/IdeaList";
import { useFrame } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Gcanvas() {
  const content = useSelector((state) => state.dom.content);
  const msgId = useSelector((state) => state.assets.msgId);
  const ideaId = useSelector((state) => state.assets.ideaId);
  return (
    <Provider store={store}>
      <div className="flex_c">
        <ForwardCanvas>
          <Main />
        </ForwardCanvas>
        {content === "msg" ? <Pop title={'Ecris ton Message !'} children={<GiveMessage />} /> : null}
        {content === "showmsg" ? (
          <Pop children={<ShowMessage msgId={msgId} />} />
        ) : null}
        {content === "idea" ? <Pop title={'Tu as une idée pour N&Y ?'} children={<GiveIdea />} /> : null}
        {content === "info" ? <Pop title={'Breaking News !'} children={<GiveInfo />} /> : null}
        {content === "showidea" ? (
          <Pop children={<ShowIdea ideaId={ideaId} />} />
        ) : null}
        <Controls/>
        {/*<Board />*/}
      </div>
    </Provider>
  );
}

const SetEmptyPosition = (props) => {
  let videoPosition = useSelector((state) => state.profile.emptyVideo);
  const { nodes, materials } = useLoader(GLTFLoader, "/empty.gltf");

  useFrame(() => {
    videoPosition.current = nodes.OriginMovie.position; //empty.getWorldPosition()
    window.empty = nodes;
  });

  return null;
};

function Main() {
  let cPosition = useSelector((state) => state.camera.position);
  let videoPosition = useSelector((state) => state.profile.emptyVideo.current);

  const distance = 30;
  const ActuPos = 0;
  const ambientLight = useControl("AmbientLight", {
    type: "number",
    value: 1,
  });
  const directionalLight = useControl("DirectionalLight", {
    type: "number",
    value: 1.61,
  });
  const posX = useControl("DLight X", {
    type: "number",
    value: 1,
  });
  const posY = useControl("DLight Y", {
    type: "number",
    value: 3,
  });
  const posZ = useControl("DLight Z", {
    type: "number",
    value: 2,
  });
  const bgColor = useControl("BG Color", { type: "color", value: "#264653" });

  return (
    <Suspense fallback={<HTML>loading...</HTML>}>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" args={[bgColor, 5, 100]} />
      {/*<lensFlare size={512} color={'purple'}/>*/}
      <ambientLight intensity={ambientLight} />
      <axesHelper />
      <Camera />
      <All />
      <CrateCreator />
      <SetEmptyPosition />
      <PanneauInfos position={[32, 3, 22]} />
      <Radio url={"/sample.mp3"} />
      <Video
        url={"/TestSite.mp4"}
        rotation={[0, Math.PI, 0]}
        position={videoPosition}
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
  );
}

export default Gcanvas;

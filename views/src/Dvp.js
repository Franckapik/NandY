import React from 'react';
//import Canvas3D from './Canvas';
import Dat from './Dat';
//import Menu from './Menu'
import ServerLink from './ServerLink';
import FPSStats from "react-fps-stats";
import Dashboard from './Dashboard'
import Keyboard from './render/Keyboard'
import GameCanvas from './GameCanvas'


const Dvp = () => {
  //const [canvas, setCanvas] = useState("c5");

  return (<div>
    <Dat />
    <FPSStats />
    <ServerLink />
    <Dashboard />
    <Keyboard />
    <GameCanvas />
   { /*<Menu setCanvas={setCanvas} visible={false}></Menu>*/}
   { /*<Canvas3D canvas={canvas}></Canvas3D>*/}
  </div>);
}

export default Dvp;

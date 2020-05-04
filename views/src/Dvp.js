import React, {useState} from 'react';
import Canvas3D from './Canvas';
import {Dat} from './store/store';
import Main from './Main'
import {ServerLink} from './store/store';
import FPSStats from "react-fps-stats";
import Dashboard from './Dashboard'


function Dvp() {
  const [canvas, setCanvas] = useState("c5");

  return (<div>
    <Dat />
    <FPSStats />
    <ServerLink />
    <Dashboard />
    <Main setCanvas={setCanvas} visible={false}></Main>
   { /*<Canvas3D canvas={canvas}></Canvas3D>*/}
  </div>);
}

export default Dvp;

import React, {useState} from 'react';
import Canvas3D from './Canvas';
import Header from './Header';
import Main from './Main';
import {Dat} from './store/store';

function App() {
  const [canvas, setCanvas] = useState("c5");

  return (<div>
    <Header></Header>
    <Dat />
    <Main setCanvas={setCanvas}></Main>
    <Canvas3D canvas={canvas}></Canvas3D>
  </div>);
}

export default App;

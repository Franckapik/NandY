import React, {useState} from 'react';
import './styles/App.scss';
import Canvas3D from './Canvas';
import Header from './Header';
import Main from './Main';

function App() {
  const [canvas, setCanvas] = useState("c2");

  return (<div className="app_container">
    <Header></Header>
    <Main setCanvas={setCanvas}></Main>
    <Canvas3D canvas={canvas}></Canvas3D>
  </div>);
}

export default App;

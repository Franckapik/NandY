import React from 'react';
import './styles/App.scss';
import Canvas3D from './Canvas';
import Header from './Header';
import Main from './Main';

function App() {
  return (<div className="app_container">
    <Header></Header>
    <Main></Main>
    <Canvas3D></Canvas3D>
  </div>);
}

export default App;

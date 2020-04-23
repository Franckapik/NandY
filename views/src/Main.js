import React from 'react';
import './styles/App.scss';

function Main({setCanvas}) {
  return (<div className="main">
<h1>Nature & You</h1>
<ul>
  <li className="cursor" onClick={()=> setCanvas("c1")}>Physics</li>
  <li className="cursor" onClick={()=> setCanvas("c2")}>Animation</li>
  <li className="cursor" onClick={()=> setCanvas("c3")}>Interaction</li>
  <li className="cursor" onClick={()=> setCanvas("c4")}>Clavier</li>

  </ul>
  </div>);
}

export default Main;

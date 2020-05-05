import React from 'react';

function Menu({setCanvas}) {
  return (<div className="MenuDom">
<h1>Nature & You</h1>
<ul>
  <li className="cursor" onClick={()=> setCanvas("c1")}>Physics</li>
  <li className="cursor" onClick={()=> setCanvas("c2")}>Animation</li>
  <li className="cursor" onClick={()=> setCanvas("c3")}>Interaction</li>
  <li className="cursor" onClick={()=> setCanvas("c4")}>Clavier</li>
  <li className="cursor" onClick={()=> setCanvas("c5")}>Game</li>

  </ul>
  </div>);
}

export default Menu;

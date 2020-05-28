import React from 'react';
import { useStoreState } from "easy-peasy"; 

function Main({setCanvas}) {

  const isLoggedIn = useStoreState(state => state.isLoggedIn)
  const currentId = useStoreState(state => state.currentId);
  const players = useStoreState(state => state.players);
  const score = useStoreState(state => state.score);
  //const score = useStoreState(state => state.findInPlayers("score", currentId));
  const x = useStoreState(state => state.players[state.currentId]?.x ?? 0);
  const y = useStoreState(state => state.players[state.currentId]?.y ?? 0);
 // const Pos = useStoreState(state => isLoggedIn && state.findInPlayers("position", currentId))

  
  return (<div className="dashbd">
  {currentId ?
    <div>
    <p>Welcome {currentId} My Score : {score}</p>
<p>{Object.entries(players).map((p,i) => (<li key={"key" + p}>PLayer : {p[0]} X: {p[1].x} Y: {p[1].y}  Score : {p[1].score}</li>) )}</p>
<p>Impulse x{x}-y{y}</p>
      </div>
      : 'Connexion au serveur'
  }

  </div>);
}

export default Main;

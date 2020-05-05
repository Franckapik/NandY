import React from 'react';
import { useStoreState } from "easy-peasy"; 

function Main({setCanvas}) {

  const currentId = useStoreState(state => state.currentId);
  const players = useStoreState(state => state.players);
  const score = useStoreState(state => state.score);
  //const score = useStoreState(state => state.findInPlayers("score", currentId));
  const x = useStoreState(state => state.players[state.currentId]?.x ?? 0);
  const y = useStoreState(state => state.players[state.currentId]?.y ?? 0);
  
  return (<div className="dashbd">
  {currentId ?
    <div>
    <p>Bienvenue {currentId} Mon score : {score}</p>
<p>{Object.entries(players).map((p,i) => (<li key={"key" + p}>Joueur : {p[0]} X: {p[1].x} Y: {p[1].y}  Score : {p[1].score}</li>) )}</p>
<p>{x}-{y}</p>
      </div>
      : 'Connexion au serveur'
  }

  </div>);
}

export default Main;

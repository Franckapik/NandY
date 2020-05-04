import React from 'react';
import { useStoreState } from "easy-peasy"; 

function Main({setCanvas}) {

  const connected = useStoreState(state => state.connected);
  const currentId = useStoreState(state => state.currentId);
  const players = useStoreState(state => state.players);
  
  return (<div className="dashbd">
  {connected ?
    <div>
    <p>Bienvenue {currentId} Mon score : {players.length? players[currentId].score : 0}</p>
    <ul>{Object.entries(players).map((p, i)=> {
        return (<li key={p}>Joueur :{p[0]} Score : {p[1].score} </li>)
      })}</ul>
      </div>
      : 'Connexion au serveur'
  }

  </div>);
}

export default Main;

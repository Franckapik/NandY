import React from 'react';
import useStore from './store/store'


function Main({setCanvas}) {
  const {connected, currentId, players, playersList} = useStore();

  return (<div className="dashbd">
  {connected ?
    <div>
    <p>Bienvenue {currentId} Mon score : {playersList.length? playersList[currentId].score : 0}</p>
    <ul>{Object.entries(playersList).map((p, i)=> {
        return (<li key={p}>Joueur :{p[0]} Score : {p[1].score} </li>)
      })}</ul>
      </div>
      : 'Connexion au serveur'
  }

  </div>);
}

export default Main;

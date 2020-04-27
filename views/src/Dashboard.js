import React from 'react';
import useStore from './store/store'


function Main({setCanvas}) {
  const {id, players} = useStore();
  return (<div className="dashbd">
<h1>Bienvenue {id}</h1>
<ul>{players.map((p, i)=> {
    return (<li key={p.id}>{p.id}</li>)
  })}</ul>
  </div>);
}

export default Main;

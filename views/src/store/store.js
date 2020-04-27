import create from 'zustand'
import React, {useState, useEffect} from 'react';
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';
import {socket} from '../Socket'




const [useStore, api] = create((set, get) => ({
  connected : false,
  players : [],
  count: 2,
  x: 2,
  y: 1,
  id: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
  forw: () => set(state => ({ x: state.x - 0.1 })),
  backw: () => set(state => ({ x: state.x + 0.1 })),
  left: () => set(state => ({ y: state.y - 0.1 })),
  right: () => set(state => ({ y: state.y + 0.1 })),
  reset: () => set(state => ({ x: 2, y : 1 })),

}))

const Dat = (props) => {
  const store = useStore()
  window.store = useStore();
      return (
        <div>

          <DatGui data={store} onUpdate={data => api.setState(data)}>
                  <DatString path='id' label='Joueur' />
                  <DatString path='players.length' label='Joueurs' />
                  <DatNumber path='x' label='x' min={1} max={10} step={0.1} />
                  <DatNumber path='y' label='y' min={1} max={10} step={0.1} />
                  <DatNumber path='count' label='count' min={1} max={10} step={1} />
                </DatGui>

              </div>
      )
}

const addplayer = (listeId) => {

  listeId.map((ident, i) => {
    console.log(ident);
    let player = {
      id : ident,
      score : 0,
      x : 0,
      y : 0,
    }
    //api.setState(state => ({players : [state.players, player]}));
    api.setState()
  })
}

const ServerLink = (props) => {
  useEffect(() => {
     socket.emit('event', 'Bonjour');
     socket.on('connected', (data) => {api.setState({connected: true}); addplayer(data)});
     socket.on('id', id => {api.setState({id: id})});
     socket.on('disconnect', (data) => {api.setState({players : data})});
  }, []);

  return null
}



export default useStore;
export {Dat};
export {ServerLink};

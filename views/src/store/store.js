import create from 'zustand'
import React, {useState, useEffect} from 'react';
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';
import {socket} from '../Socket';
import produce from "immer";





const [useStore, api] = create((set, get) => ({
  connected : false,
  players : [],
  playersList : {},
  count: 2,
  //x: () => get(state => state.playersList[state.currentId].x),
  x: 2,
  y: 1,
  currentId: 0,
  win: () => set(state => {state.playersList[state.currentId].score += 1} ),
  upPlayers: (list) => set(state => ({playersList: list})),
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
  forw: () => set(state => {state.playersList[state.currentId].x -= 0.1} ),
  backw: () => set(state => {state.playersList[state.currentId].x += 0.1} ),
  left: () => set(state => {state.playersList[state.currentId].y -= 0.1} ),
  right: () => set(state => {state.playersList[state.currentId].y += 0.1} ),
  reset: () => set(state => {state.playersList[state.currentId].x = state.x} ),
  set: fn => set(produce(fn)),

}))

const Dat = (props) => {
  const store = useStore()
  window.store = useStore();
      return (
        <div>

          <DatGui data={store} onUpdate={data => api.setState(data)}>
                  <DatString path='currentId' label='Joueur' />
                  <DatString path='players.length' label='Joueurs' />
                  <DatString path='playersList[currentId].score' label='Score' />
                  <DatNumber path='x' label='x' min={1} max={10} step={0.1} />
                  <DatNumber path='y' label='y' min={1} max={10} step={0.1} />
                  <DatNumber path='count' label='count' min={1} max={10} step={1} />
                </DatGui>

              </div>
      )
}



const ServerLink = (props) => {
  const {upPlayers, playersList, currentId, set} = useStore();
  
  const addplayer = (listeId) => {
  let playersList = {};
    listeId.map((ident, i) => {
    playersList[ident] = {
        score : 0,
        x : 0,
        y : 0
      }
    })
    console.log("Player list updated");
    upPlayers(playersList)
   }

  const a = api.getState().playersList
  useEffect(() => {
     socket.on('id', id => {
       set(state => ({currentId: id}))
       socket.emit('identified', api.getState().currentId)
     });
     socket.on('added', players => {addplayer(players)
     set(state => ({connected: true}))})
     //socket.on('up', playersList => {api.setState({playersList: playersList})});
     //socket.emit('move', playersList);
     socket.on('disconnect', (data) => { addplayer(data, upPlayers)});
  }, []);



  return null
}

export default useStore;
export {Dat};
export {ServerLink};

import { createStore, useStoreState, action, useStoreActions, computed } from 'easy-peasy';
import React, {useEffect} from 'react';
import DatGui, { DatNumber, DatString, DatBoolean} from 'react-dat-gui';
import {socket} from '../Socket';

const store = createStore({
  players : {},
  movement : {
    up: false,
    down: false,
    left: false,
    right: false
  },
  currentId : 0,
  score : computed(state => state.players[state.currentId]?.score ?? 0),
  nbPlayers : computed(state => Object.keys(state.players).length),
  updatePlayers : action(
    (state, payload) => {state.players = payload}
  ),
  updateData : action(
    (state, payload) => ({state: {...state, ...payload}})
  ),
  whoiam : action(
    (state, payload) => {state.currentId = payload}
  ),
  moveUP : action(
    (state, payload) => {state.movement[payload] = true}
  ),
  moveDOWN : action(
    (state, payload) => {state.movement[payload] = false}
  )
});


const Dat = (props) => {
  const data = useStoreState(state => state);
  window.store = data;
  const updateData = useStoreActions(action => action.updateData);


      return (
        <div>
          <DatGui data={data} onUpdate={newData => updateData(newData)}>
                  <DatString path='currentId' label='Joueur' />
                  <DatString path='movement.up' label='Avancer' />
                  <DatString path='nbPlayers' label='Nombre de joueurs' />
                  <DatNumber path='score' label='Score' />
                </DatGui>

              </div>
      )
}





const ServerLink = (props) => {
const movement = useStoreState(state => state.movement)
const updatePlayers = useStoreActions(actions => actions.updatePlayers)
const whoiam = useStoreActions(actions => actions.whoiam)

function useSocketEvent(socket, event, handler, dependencies) {
  useEffect(() => {
    const uniqueHandler = (...args) => {
      return handler(...args);
    };
    
    socket.on(event, uniqueHandler);
    
    return () => socket.off(event, uniqueHandler);
  }, [dependencies]);
}

  socket.emit('new player');

  

  useSocketEvent(socket, 'id', data => {whoiam(data)}, whoiam)
  useSocketEvent(socket, 'state', players => { updatePlayers(players) }, updatePlayers)

  useEffect(()=> {
    socket.emit('movement', movement);
  }, [movement])


  return null
}


export default store;
export {Dat};
export {ServerLink};

import { createStore } from 'easy-peasy';
import React, {useEffect, useState} from 'react';
import DatGui, { DatNumber, DatString, DatBoolean} from 'react-dat-gui';
import {socket} from '../Socket';

const movement = 
  {
    up: false,
    down: false,
    left: false,
    right: false
  }

const store = createStore({
  connected : true,
  players : {},
  movement : movement,
  currentID : 0,
});


const Dat = (props) => {
      return (
        <div>

          <DatGui data={store}>
                  <DatString path='currentId' label='Joueur' />
                  <DatString path='players.length' label='Joueurs' />
                  <DatString path='playersList[currentId].score' label='Score' />
                  <DatNumber path='x' label='x' min={0} max={10} step={0.1} />
                  <DatNumber path='y' label='y' min={1} max={10} step={0.1} />
                  <DatNumber path='count' label='count' min={1} max={10} step={1} />
                  <DatBoolean path='movement.up'/>
                  <DatBoolean path='connected'/>
                </DatGui>

              </div>
      )
}



const ServerLink = (props) => {
  return null
}

export default store;
export {Dat};
export {ServerLink};

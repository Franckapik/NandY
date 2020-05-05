import React from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import DatGui, { DatNumber, DatString} from 'react-dat-gui';


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
                    <DatString path='isLoggedIn' label='Logged' />
                    <DatNumber path='score' label='Score' />
                  </DatGui>
  
                </div>
        )
  }

  export default Dat
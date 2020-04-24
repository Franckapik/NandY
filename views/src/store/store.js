import create from 'zustand'
import React, {useState} from 'react';
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';


const [useStore, api] = create((set, get) => ({
  count: 2,
  x: 1,
  y: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
  forw: () => set(state => ({ x: state.x + 0.1 })),
  backw: () => set(state => ({ x: state.x - 0.1 })),
  left: () => set(state => ({ y: state.y - 0.1 })),
  right: () => set(state => ({ y: state.y + 0.1 })),
}))

const Dat = (props) => {
  const state = useStore()
      return (
        <div>

          <DatGui data={state} onUpdate={dat => api.setState(dat)}>
                  <DatNumber path='x' label='x' min={1} max={10} step={1} />
                  <DatNumber path='y' label='y' min={1} max={10} step={1} />
                  <DatNumber path='count' label='count' min={1} max={10} step={1} />
                </DatGui>

              </div>


      )

}


export default useStore;
export {Dat};

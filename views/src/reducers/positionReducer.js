import React from 'react'

// Reducer

let initialState = {
  id: 0,
  position: [0,0,0],
  positionPanel: [0,0,0],
  velocity: [0,0,0],
  positionSocket : 0,
  emptyVideo : React.createRef(),
};

export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case "EDWIN POSITION":
      return { ...state, position: action.position };
    case "EDWIN VELOCITY":
      return { ...state, velocity: action.velocity };
    case "EDWIN WORLD POSITION":
      return { ...state, matrixWorld: action.matrixWorld };
    case "PANEL POSITION":
      return { ...state, positionPanel: action.position };
    case "ID":
      return { ...state, id: action.id };
    case "DAT UPDATE":
      return {...action.newData.profile };
    default:
      return state;
  }
}

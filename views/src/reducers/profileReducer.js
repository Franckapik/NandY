// Reducer

let initialState = {
  id: 0,
  position: [0,0,0],
  velocity: [0,0,0],
  positionSocket : 0
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "EDWIN POSITION":
      return { ...state, position: action.position };
    case "EDWIN VELOCITY":
      return { ...state, velocity: action.velocity };
    case "SET POSITION":
      return { ...state, positionSocket: action.position };
    case "EDWIN WORLD POSITION":
      return { ...state, matrixWorld: action.matrixWorld };
    case "ID":
      return { ...state, id: action.id };
    case "DAT UPDATE":
      return {...action.newData.profile };
    default:
      return state;
  }
}

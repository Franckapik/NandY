// Reducer

let initialState = {
  id: null,
  position: {x : 0, y:0, z:0},
  positionSocket : {x : 0, y : 0, z : 0}
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "EDWIN POSITION":
      return { ...state, position: action.position };
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

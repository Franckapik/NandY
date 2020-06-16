let camera = {
  orbitEnable: true,
};

export default function cameraReducer(state = camera, action) {
  switch (action.type) {
    case "ORBIT TOGGLE":
      return { ...state, orbitEnable: !state.orbitEnable };
    case "CAMERA POSITION":
      return { ...state, position: action.position };
    case "DAT UPDATE":
      return { ...action.newData.camera };
    default:
      return state;
  }
}

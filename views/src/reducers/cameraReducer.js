let camera = {
  orbitEnable: false,
};

export default function cameraReducer(state = camera, action) {
  switch (action.type) {
    case "ORBIT TOGGLE":
      return { ...state, orbitEnable: !state.orbitEnable };
    case "DAT UPDATE":
      return { ...action.newData.camera };
    default:
      return state;
  }
}

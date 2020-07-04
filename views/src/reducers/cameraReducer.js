let camera = {
  orbitEnable: true,
  position : [10,10,10],
  maxDistance : 100, // zoom out
  minDistance : 20, //zoom in
  minPolarAngle: Math.PI / 6,
  maxPolarAngle: Math.PI/2.5,
  target : [0,0,0],
  defaultTarget : true,
  raycast : {
    x : 0,
    y : 0,
    z : 0
  },
  enableRay : true
};

export default function cameraReducer(state = camera, action) {
  switch (action.type) {
    case "ORBIT TOGGLE":
      return { ...state, orbitEnable: !state.orbitEnable };
    case "CAMERA POSITION":
      return { ...state, position: action.position };
    case "CAMERA TARGET":
      return { ...state, target: action.target };
    case "CAMERA DEFAULTTARGET":
      return { ...state, defaultTarget: action.defaultTarget };
    case "CAMERA ZOOM":
      return { ...state, zoom: action.zoom };
    case "RAYCAST":
      return { ...state, raycast: action.raycast };
    case "DAT UPDATE":
      return { ...action.newData.camera };
    default:
      return state;
  }
}

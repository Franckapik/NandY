import { useFrame, useThree } from "react-three-fiber";
import store from "../store/store";

export default function Camera() {
  const { camera } = useThree();
  let perso = Object.values(store.getState().profile.position);
  camera.position.set(23.41, 19.34, 7);
  //camera.up.set(0, 0, 1);
  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  useFrame(state => {
store.dispatch({ type: "CAMERA POSITION", position: camera.position })
let erwin = store.getState().profile;
camera.position.x = erwin.position.x+10;
camera.position.y = erwin.position.y+10;
camera.position.z = erwin.position.z+30;
camera.lookAt(erwin.position)
window.camera = camera
  }

  );


  return null;
}

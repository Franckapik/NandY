import { useFrame, useThree } from "react-three-fiber";
import store from "../store/store";

export default function Camera() {
  const { camera } = useThree();
  let perso = Object.values(store.getState().profile.position);
  camera.position.z = 10 
  camera.position.x = 10 
  camera.position.y = 10 
  //camera.up.set(0, 0, 1);
  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  useFrame(state => {
//store.dispatch({ type: "CAMERA POSITION", position: camera.position })
let erwin = store.getState().profile.position;
camera.position.y = erwin[1]+10;
camera.position.z = erwin[2] -10;
camera.position.x = erwin[0];
camera.lookAt(erwin[0], erwin[1], erwin[2])
//console.log(erwin[0]);

window.camera = camera
  }

  );


  return null;
}

import { useFrame, useThree } from "react-three-fiber";
import { useSelector } from "react-redux";
import useStore from "../store/zstore";

export default function Camera() {
  const { camera } = useThree();
  const e = useStore(state => state.position)
  camera.fov = 100;

  useFrame(() => {
    camera.position.set(e[0] + 10, e[1] + 15, e[2] + 10);
    camera.lookAt(e[0], e[1] + 8, e[2]);
   // window.camera = camera;
  });

  return null;
}

/*function Camera(props) {
  const cam = useRef()
  const { setDefaultCamera } = useThree()
  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(cam.current), [])
  // Update it every frame
  useFrame(() => cam.current.updateMatrixWorld())
  return <perspectiveCamera ref={cam} {...props} />
}
*/

// let vc = new THREE.Vector3().fromArray(e)

//let d = vc.distanceTo({x : -30, y : 5, z : -30});
//toucher la base et changer la distance
//toucher une zone et diminution de la distance pour zoom

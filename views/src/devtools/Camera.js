import { useFrame, useThree } from "react-three-fiber";
import useStore from "../store/zstore";

export default function Camera() {
  const { camera } = useThree();
  const e = useStore(state => state.position)

  useFrame(() => {
    camera.position.set(e[0] , e[1]+5 , e[2] + 10);
    camera.lookAt(e[0], e[1] + 5, e[2]);
    camera.fov = 50;
    camera.updateProjectionMatrix();
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

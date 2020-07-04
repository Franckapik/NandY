import { useFrame, useThree } from "react-three-fiber";
import { useSelector } from "react-redux";

export default function Camera() {
  const { camera } = useThree();
  let c = useSelector((state) => state.camera.position);
  const e = useSelector((state) => state.profile.position);
  camera.fov = 190;

  useFrame((state) => {
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

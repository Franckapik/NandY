import React from "react";
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from 'use-cannon';
import useStore from "../store/zstore";
export const CrateList = () => {

const crates = useStore(state => state.crates);

  return (
    crates.map((a, i) => {
      return (
        <Crate key={"crate" + i} material={i} position={[1 * Math.random(), 15, 1 * Math.random()]} />
      );
    })
  );
};
const Crate = (props) => {
  const [cube] = useBox(() => ({
    mass: 1,
    args: [2, 2, 2],
    position: props.position
  }));
  //const { modelUrl } = useState(state => state.assets.crateTypes)
  const { nodes } = useLoader(GLTFLoader, './all.gltf');
  //const [beige, blanc, bleu, gris, jaune, marron, noir, orange, rouge, turquoise, vert] = useLoader(THREE.TextureLoader, ['./matcaps/beige.png','./matcaps/blanc.png','./matcaps/bleu.png','./matcaps/gris.png','./matcaps/jaune.png','./matcaps/marron.png','./matcaps/noir.png','./matcaps/orange.png','./matcaps/rouge.png','./matcaps/turquoise.png','./matcaps/vert.png'])
  const [beige, blanc, jaune, marron, noir,  rouge, vert] = useLoader(THREE.TextureLoader, ['./matcaps/beige.png','./matcaps/blanc.png','./matcaps/bleu.png','./matcaps/gris.png','./matcaps/jaune.png','./matcaps/marron.png','./matcaps/noir.png','./matcaps/orange.png','./matcaps/rouge.png','./matcaps/turquoise.png','./matcaps/vert.png'])
  const arr = [jaune, rouge, vert, beige, blanc, noir];

  return (
    <group ref={cube} {...props}>
      <mesh material={new THREE.MeshMatcapMaterial({matcap : arr[props.material]})} geometry={nodes['crateGeom2.002_0'].geometry} />
      <mesh material={new THREE.MeshMatcapMaterial({matcap : marron})} geometry={nodes['crateGeom2.002_1'].geometry} />
      <mesh material={new THREE.MeshMatcapMaterial({matcap : noir})} geometry={nodes['crateGeom2.002_2'].geometry} />
    </group>
  );
};

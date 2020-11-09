import React from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useStore from '../../store/zstore';

export default function CrateCreator(props) {
  const { nodes } = useLoader(GLTFLoader, '/all.gltf')
  const addCrate = useStore(state => state.addCrate)
  const crateTypes = ['vert', 'rouge', 'orange', 'bleu'];
  const [blanc, rouge] = useLoader(THREE.TextureLoader, ['./matcaps/beige.png','./matcaps/blanc.png','./matcaps/bleu.png','./matcaps/gris.png','./matcaps/jaune.png','./matcaps/marron.png','./matcaps/noir.png','./matcaps/orange.png','./matcaps/rouge.png','./matcaps/turquoise.png','./matcaps/vert.png'])



  return (
    <group position={[-7.84, 1.32, 20.72]} >
        <mesh material={new THREE.MeshMatcapMaterial({matcap : blanc})} geometry={nodes.switchGeom_0.geometry} />
        <mesh 
        material={new THREE.MeshMatcapMaterial({matcap : rouge})} 
        geometry={nodes.switchGeom_1.geometry} 
        onClick={ () => {
          const random = Math.floor(Math.random() * crateTypes.length)         
          addCrate(crateTypes[random]) 
        }
  
    }/>
      </group>
  )
}

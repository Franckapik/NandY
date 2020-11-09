import React from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from 'use-cannon';
import useStore from '../../store/zstore';

export default function Button(props) {
  const { nodes } = useLoader(GLTFLoader, '/all.gltf')
  const changeContent = useStore(state => state.changeContent)
  const togglePop = useStore(state => state.togglePop)
  const [ blanc, rouge] = useLoader(THREE.TextureLoader, ['./matcaps/beige.png','./matcaps/blanc.png','./matcaps/bleu.png','./matcaps/gris.png','./matcaps/jaune.png','./matcaps/marron.png','./matcaps/noir.png','./matcaps/orange.png','./matcaps/rouge.png','./matcaps/turquoise.png','./matcaps/vert.png'])
  const [cube] = useBox(() => ({
    mass: 1,
    args : [2,2,2],
    position: props.position,
  }));

  return (
    <group  {...props} >
        <mesh ref={cube} material={new THREE.MeshMatcapMaterial({matcap : blanc})} geometry={nodes.switchGeom_0.geometry} />
        <mesh 
        material={new THREE.MeshMatcapMaterial({matcap : rouge})} 
        geometry={nodes.switchGeom_1.geometry} 
        onClick={ () => {
          changeContent(props.content);
          togglePop();
        }
  
    }/>
      </group>
  )
}

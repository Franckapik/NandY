import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useThree } from 'react-three-fiber'
import {useSelector} from 'react-redux';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from 'use-cannon'
import useStore from '../../store/zstore';

export default function CrateCreator(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/all.gltf')

  const crates = useStore(state => state.crates)
  const addCrate = useStore(state => state.addCrate)
  const crateTypes = ['vert', 'rouge', 'orange', 'bleu'];
  const [beige, blanc, bleu, gris, jaune, marron, noir, orange, rouge, turquoise, vert] = useLoader(THREE.TextureLoader, ['./matcaps/beige.png','./matcaps/blanc.png','./matcaps/bleu.png','./matcaps/gris.png','./matcaps/jaune.png','./matcaps/marron.png','./matcaps/noir.png','./matcaps/orange.png','./matcaps/rouge.png','./matcaps/turquoise.png','./matcaps/vert.png'])



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

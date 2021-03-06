/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useStore from '../../store/zstore';



export default function IdeaList (props) {
  const ideaList = useStore(state => state.idea)
  return (
      
        ideaList.map((a, i) => {
        return (<Idea position={[Math.random()* 2 * i, i * Math.random() * 2 , i * Math.random() * 2]} key={i} ideaId={i} title={a.title} msg={a.msg} name={a.name} args={[2,2,2]} />)
      })
      
  );
};

const Idea = (props) => {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/ampoule.gltf')
  const changeId = useStore(state => state.changeId);
  const changeContent = useStore(state => state.changeContent)
  const togglePop = useStore(state => state.togglePop)


  return (
    <group ref={group} {...props} dispose={null} onClick={() => {
      togglePop();
      changeContent('showidea');
      changeId(props.ideaId);
    }}>
      <mesh material={materials['Matcap jaune']} geometry={nodes['Sphere.011_0'].geometry} />
      <mesh material={materials['Matcap orange']} geometry={nodes['Sphere.011_1'].geometry} />
      <mesh material={materials['Matcap bleu fonce']} geometry={nodes['Sphere.011_2'].geometry} />
    </group>
  )
}

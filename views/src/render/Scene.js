import React from 'react'
import {useThree} from 'react-three-fiber'


 export default function Scene() {
  const { camera } = useThree();

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  camera.up.set(0, 0, 1);
  camera.position.set(-5, 7, 5);

  return (
    <mesh>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshNormalMaterial attach='material' />
    </mesh>
  );
}

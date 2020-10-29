import React from 'react'
import { Canvas, useUpdate } from 'react-three-fiber'
import { Vehicle, GameEntity } from 'yuka'
import { useYuka } from '../../devtools/useYuka.js'





function TargetMesh(props) {
  const [ref] = useYuka({ type: GameEntity, ...props })

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.05]} />
      <meshBasicMaterial color={0xff0000} attach="material" />
    </mesh>
  )
}



function TryYuka() {
  return (
    <>
        <TargetMesh name="Target" />
        </>
  )
}

export default TryYuka

import React from 'react'
import { useUpdate } from 'react-three-fiber'
import { Vehicle, GameEntity } from 'yuka'
import { useYuka } from '../../devtools/useYukaFollowRegion.js'

function VehicleMesh(props) {
  const [ref] = useYuka({ type: Vehicle, ...props })

  return (
    <mesh ref={ref}>
      <coneBufferGeometry
        ref={useUpdate((geometry) => geometry.rotateX(Math.PI * 0.5), [])}
        attach="geometry"
        args={[2, 2, 8]}
      />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

/*function WandererMesh(props) {
  const [ref] = useYuka({ type: MovingEntity, ...props })
  return(
    <Sphere ref={ref}>
  <meshBasicMaterial attach="material" color="hotpink" />
    </Sphere>
  )
}*/



function TargetMesh(props) {
  const [ref] = useYuka({ type: GameEntity, ...props })

  return (
    <mesh ref={ref} >
      <sphereBufferGeometry attach="geometry" args={[0.5]} />
      <meshBasicMaterial color={0xff0000} attach="material" />
    </mesh>
  )
}


export {VehicleMesh, TargetMesh}

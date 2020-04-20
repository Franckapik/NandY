import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import {Physics, usePlane, useBox} from 'use-cannon'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (<mesh {...props} ref={mesh}
    onClick={e => setActive(!active)}
    onPointerOver={e => setHover(true)}
    onPointerOut={e => setHover(false)}>
    <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
    <meshStandardMaterial attach="material" color={hovered
        ? 'hotpink'
        : 'orange'}/>
  </mesh>)
}

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [ -Math.PI / 2, 0, 0 ], ...props }))
  return (<mesh ref={ref} receiveShadow="receiveShadow">
    <planeBufferGeometry attach="geometry" args={[1009, 1000]}/>
    <shadowMaterial attach="material" color="#171717"/>
  </mesh>)
}

function Cube(props) {
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [ref] = useBox(() => ({
    mass: 0.02,
    position: [
      0, 5, 0
    ],
    rotation: [
      0.4, 0.2, 0.5
    ],
    ...props
  }))
  return (<mesh receiveShadow="receiveShadow" castShadow="castShadow" ref={ref}
    onClick={e => setActive(!active)} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)}>
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color={hovered
        ? 'hotpink'
        : 'orange'}/>
  </mesh>)
}

const Canvas3D = () => {
  return (<div className="canvas">
    <Canvas shadowMap="shadowMap" sRGB="sRGB" gl={{
        alpha: false
      }} camera={{
        position: [
          0, 10, 0
        ],
        fov: 50
      }}>
      <color attach="background" args={['lightblue']}/>
      <hemisphereLight intensity={0.35}/>
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow="castShadow"/>
      <Physics>
        <Plane/>
        <Cube/>
        <Cube position={[0, 10, -2]}/>
        <Cube position={[0, 20, -2]}/>
      </Physics>
    </Canvas>,
  </div>);
}

export default Canvas3D;

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { useSelector } from "react-redux";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import lerp from "lerp";
import { useBox, usePlane, useSphere, useHingeConstraint } from "use-cannon";
import store from "../../store/store";
import {useHelper} from 'drei';
import { BoxHelper, SpotLightHelper, PointLightHelper } from "three"
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper"



export default function Model(props) {
  const [plane, api2] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, "essai.gltf");

  const position = useSelector((state) => state.profile.positionSocket);

  let keys = useSelector((state) => state.keys);
  let force = 10;

  const [cube, api] = useBox(() => ({
    mass: 10,
    rotation: [Math.PI / 2, 0, 0],
    position : [0, 20, 0],
    args: [5, 2, 0.5],
    linearDamping: 0,
    angularDamping: 0,
  }));

  const wheelmass =20;


  const [wheelBodyLF, wheelApiLF] = useSphere(() => ({
    mass : wheelmass,
  }));
  const [wheelBodyRF, wheelApiRF] = useSphere(() => ({
    mass : wheelmass
  }));
  const [wheelBodyLR, wheelApiLR] = useSphere(() => ({
    mass : wheelmass
  }));
  const [wheelBodyRR, wheelApiRR] = useSphere(() => ({
    mass : wheelmass
  }));

  useHelper(cube, BoxHelper, "cyan")
  useHelper(wheelBodyLF, BoxHelper, "red")
  useHelper(wheelBodyRF, BoxHelper, "yellow")



  const zero = [0, 0, 0];
  const leftAxis = [1, 0, 0];
  const rightAxis = [-1, 0, 0];
  const rightFrontAxis = [-1, 0, 0];
  const leftFrontAxis = [1, 0, 0];

  //useHelper(wheelBodyLF, VertexNormalsHelper, 4, "#272740")
  //useHelper(wheelBodyRF, VertexNormalsHelper, 4, "#272740")
  //useHelper(wheelBodyLR, VertexNormalsHelper, 4, "red")
  //useHelper(wheelBodyRR, VertexNormalsHelper, 4, "red")

  const separationWheel = 1.5; 
  const heightWheel = 2;


  useHingeConstraint(cube, wheelBodyRF, { pivotA: [separationWheel, heightWheel, 0], axisA : rightFrontAxis, pivotB: zero, axisB: rightAxis })
  useHingeConstraint(cube, wheelBodyLR, { pivotA: [-separationWheel, -heightWheel, 0], axisA : leftAxis, pivotB: zero, axisB: leftAxis })
  useHingeConstraint(cube, wheelBodyRR, { pivotA: [separationWheel, -heightWheel, 0], axisA : rightAxis, pivotB: zero, axisB: rightAxis })
  useHingeConstraint(cube, wheelBodyLF, { pivotA: [-separationWheel, heightWheel, 0], axisA : leftFrontAxis, pivotB: zero, axisB: leftAxis })


  useFrame(() => keys.up && wheelApiRR.applyImpulse([0, 0, force], [0, 0, 1]));
  useFrame(() => keys.down && wheelApiRR.applyImpulse([0, 0, force * -1], [0, 0, 1]));
  useFrame(() => keys.up && wheelApiLR.applyImpulse([0, 0, force], [0, 0, 1]));
  useFrame(() => keys.down && wheelApiLR.applyImpulse([0, 0, force * -1], [0, 0, 1]));
  
  const braque = 6;
  useFrame(() => keys.right && wheelApiRF.rotation.set(0, -Math.PI / braque, 0 ));
  useFrame(() => keys.right && wheelApiLF.rotation.set(0, -Math.PI / braque, 0 ));
  useFrame(() => keys.left && wheelApiLF.rotation.set(0, Math.PI / braque, 0 ));
  useFrame(() => keys.left && wheelApiRF.rotation.set(0, Math.PI / braque, 0 )  );
  


  useEffect(
    () =>
      api.position.subscribe((position) =>
        store.dispatch({ type: "EDWIN POSITION", position: position })
        
      ),
    []
  );
  useEffect(
    () =>
      api.velocity.subscribe((velocity) =>
        store.dispatch({ type: "EDWIN VELOCITY", velocity: velocity })
      ),
    []
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref= {wheelBodyLF} material={nodes.wLF.material} geometry={nodes.wLF.geometry} position={[-1.31, 1.36, 0]} />
      <mesh ref= {wheelBodyRF} material={nodes.wRF.material} geometry={nodes.wRF.geometry} position={[1.28, 1.36, 0]} />
      <mesh ref= {wheelBodyLR} material={nodes.wBL.material} geometry={nodes.wBL.geometry} position={[-1.31, -1.49, 0]} />
      <mesh ref= {wheelBodyRR} material={nodes.wBR.material} geometry={nodes.wBR.geometry} position={[1.28, -1.49, 0]} />
      <mesh ref= {cube} material={materials.Material} geometry={nodes.Cube.geometry} position={[0, 0, 1]} />
      <mesh ref= {plane} material={materials['Material.001']} geometry={nodes.Plane.geometry} />
    </group>
  );
}

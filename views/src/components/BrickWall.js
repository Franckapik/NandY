import React from "react";
import { useBox } from "use-cannon2";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export const BrickWall = (props) => {
  const arr = new Array(props.number).fill();
  console.log(arr);

  return arr.map((a, i) => {
    return (
      <>
        <Brick
          key={"brique" + i}
          position={[10, 10, i * 2]}
          url={"/brick.gltf"}
          scale={[2, 2, 2]}
        />
        <Brick
          key={"brique" + i}
          position={[10, 12, i * 2]}
          url={"/brick.gltf"}
          scale={[2, 2, 2]}
        />
        <Brick
          key={"brique" + i}
          position={[10, 14, i * 2]}
          url={"/brick.gltf"}
          scale={[2, 2, 2]}
        />
      </>
    );
  });
};
const Brick = (props) => {
  const { nodes, materials } = useLoader(GLTFLoader, props.url);
  const [brick] = useBox(() => ({
    mass: 1,
    linearDamping: 0,
    position: props.position,
  }));
  return (
    <mesh
      ref={brick}
      material={materials.shadeWhite}
      scale={props.scale}
      geometry={nodes.shadeWhite119.geometry}
    />
  );
};

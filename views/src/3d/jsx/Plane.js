import React from "react";
import { usePlane } from "use-cannon";

export default function Plane(props) {
  const [plane, api2] = usePlane(() => ({ 
    position : [0,-0.5,0],
    rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh
      ref={plane}
      visible={false}
      receiveShadow="receiveShadow"
      onPointerMove={(e) => {
        //store.dispatch({type : 'RAYCAST', raycast : e.point })
      }}
    >
      <planeBufferGeometry attach="geometry" args={[0, 50, 0]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

import { Sphere } from "drei";
import React from "react";
import { useSphere } from "use-cannon";
import { useFrame } from "react-three-fiber";
import store from "../../store/store";
import Item from '../../constructor/objects'


const SphereComp = (props) => {
  const [boule] = useSphere(() => ({
    mass: 0,
    position : props.position
  }));

  let listeItems = []


  useFrame((e) => {
    //const rayposition = store.getState().camera.raycast;
    //bouleApi.position.set(rayposition.x, rayposition.y, rayposition.z);
    listeItems = store.getState().carnet.items;

  });



  return (
    <Sphere ref={boule} {...props} onClick={() => {
      var myItem = new Item(listeItems.length + 1, true, [0,0,10], true);
      store.dispatch({type : 'ADD MESH', item : myItem})  
    }}>
      <meshBasicMaterial attach="material" color="hotpink" />
    </Sphere>
  );
};

export default SphereComp;

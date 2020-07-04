import React from "react";
import Cube from "../3d/jsx/Cube";
import { useSelector } from "react-redux";
export const ItemsList = () => {
  const listeItems = useSelector((state) => state.carnet.items);
  return (
    listeItems.map((item, i) => {
      return (
        <Item key={i} id={item.id} visible={item.visible} position={item.position} />
      );
    })
  );
};
const Item = ({ props }) => {
  //const { modelUrl } = useState(state => state.items[id])
  //const { ... } = useLoader(GLTFLoader, modelUrl)
  return (
    <Cube {...props}></Cube>
  );
};

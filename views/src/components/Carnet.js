import React from "react";
import store from "../store/store";
import { useSelector } from "react-redux";
import { HTML } from "drei";
export const Carnet = (props) => {
  const listeItems = useSelector((state) => state.carnet.items);

  return (
    <mesh {...props}>
      <HTML>
        <div>
          Carnet :
         <ul>{listeItems.map((a, i) => {
          return (
            <li key={'key' + i} onClick={() => {

              let thisItem = listeItems.find(x => x.id === a.id);
              console.log(thisItem);

              if (thisItem) {
                thisItem.visible = false;
                thisItem.position = [0, 0, 10];
                store.dispatch({ type: 'UPDATE MESH', item: thisItem });
              }

            }}>{a.id}</li>
          );
        })}</ul>

        </div>
      </HTML>
    </mesh>
  );
};

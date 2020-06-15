import React, { useState } from "react";
import DatGui, {
  DatNumber,
  DatString,
  DatFolder,
  DatBoolean,
} from "react-dat-gui";
import store from "../store/store";

const Dat = () => {
  const handleUpdate = (newData) => {
    store.dispatch({ type: "DAT UPDATE", newData: newData });
  };

  store.subscribe(() => setData(store.getState()));

  const [data, setData] = useState();
  window.store = store.getState();
  return (
    <div>
      <DatGui data={data} onUpdate={handleUpdate}>
        <DatFolder title="Position Edwin" closed="true">
          <DatString path="profile.id" label="Id" />
          <DatString path="profile.position.x" label="x" />
          <DatString path="profile.position.y" label="y" />
          <DatString path="profile.position.z" label="z" />
        </DatFolder>
        <DatFolder title="Clavier" closed="true">
          <DatBoolean path="keys.down" label="down" />
          <DatBoolean path="keys.up" label="up" />
          <DatBoolean path="keys.left" label="left" />
          <DatBoolean path="keys.right" label="right" />
        </DatFolder>
        <DatFolder title="Camera" closed="false">
          <DatBoolean path="camera.orbitEnable" label="OrbitControls" />
          <DatString path="camera.position.x" label="x" />
          <DatString path="camera.position.y" label="y" />
          <DatString path="camera.position.z" label="z" />
        </DatFolder>
      </DatGui>
    </div>
  );
};

export default Dat;

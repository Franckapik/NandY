import React, { useState } from "react";
import {useSelector} from 'react-redux';
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


  const state = useSelector(state => state)

  return (
    <div>
      <DatGui data={state} onUpdate={handleUpdate}>
        <DatFolder title="Edwin" closed="true">
          <DatString path="profile.id" label="Id" />
          <DatString path="profile.position[0]" label="Position x" />
          <DatString path="profile.position[1]" label="Position y" />
          <DatString path="profile.position[2]" label="Position z" />
          <DatString path="profile.velocity[0]" label="Velocity x" />
          <DatString path="profile.velocity[1]" label="Velocity y" />
          <DatString path="profile.velocity[2]" label="Velocity z" />
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

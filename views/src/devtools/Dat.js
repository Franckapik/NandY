import React from "react";
import {useSelector} from 'react-redux';
import DatGui, {
  DatNumber,
  DatString,
  DatFolder,
  DatBoolean
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
        <DatFolder title="Car" >
          <DatString path="profile.id" label="Id" />
          <DatString path="profile.position[0]" label="Position x" />
          <DatString path="profile.position[1]" label="Position y" />
          <DatString path="profile.position[2]" label="Position z" />
          <DatString path="profile.velocity[0]" label="Velocity x" />
          <DatString path="profile.velocity[1]" label="Velocity y" />
          <DatString path="profile.velocity[2]" label="Velocity z" />
        </DatFolder>
        <DatFolder title="Clavier" >
          <DatBoolean path="keyboard.down" label="down" />
          <DatBoolean path="keyboard.up" label="up" />
          <DatBoolean path="keyboard.left" label="left" />
          <DatBoolean path="keyboard.right" label="right" />
          <DatNumber path="keyboard.force" min={-50} max={50} step={1} label="force" />
          <DatNumber path="keyboard.rotation" min={-50} max={50} step={1} label="rotation" />
        </DatFolder>
        <DatFolder title="Camera" >
          <DatBoolean path="camera.orbitEnable" label="OrbitControls" />
          <DatNumber path="camera.position[0]" min={-100} max={100} step={1} label="x" />
          <DatNumber path="camera.position[1]" min={-100} max={100} step={1} label="y" />
          <DatNumber path="camera.position[2]" min={-100} max={100} step={1} label="z" />
          <DatNumber path="camera.maxDistance" min={-100} max={100} step={1} label="maxDistance" />
          <DatNumber path="camera.minDistance" min={-100} max={100} step={1} label="minDistance" />
          <DatNumber path="camera.maxPolarAngle" min={-100} max={100} step={1} label="maxPolarAngle" />
          <DatNumber path="camera.minPolarAngle" min={-100} max={100} step={1} label="minPolarAngle" />
          <DatBoolean path="camera.defaultTarget" label="defaultTarget" />
          <DatString path="camera.raycast.x" label="Raycast x" />
          <DatString path="camera.raycast.y" label="Raycast y" />
          <DatString path="camera.raycast.z" label="Raycast z" />
          <DatBoolean path="camera.enableRay" label="enableRay" />
          </DatFolder>
        <DatFolder title="Items">
        <DatString path="items.items[0]" label="Items" />
        <DatString path="items.items[1]" label="Items" />
        <DatString path="items.items[2]" label="Items" />
        <DatString path="items.items[3]" label="Items" />

          </DatFolder>

      </DatGui>
    </div>
  );
};

export default Dat;

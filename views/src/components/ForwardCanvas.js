import React from "react";
import { Canvas } from "react-three-fiber";
import store from "../store/store";
import { Provider } from "react-redux";
export function ForwardCanvas({ children }) {
  return (
    <div className="canvas">
      <Canvas >
        <Provider store={store}>{children}</Provider>
      </Canvas>
    </div>
  );
}

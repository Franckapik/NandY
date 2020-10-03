import React from "react";
import FPSStats from "react-fps-stats";
import Keyboard from "../devtools/Keyboard";
import GCanvas from "../components/Gcanvas.js";

const Dvp = () => {
  //const [canvas, setCanvas] = useState("c5");

  return (
    <div>
      <FPSStats />
      <Keyboard />
      <GCanvas />
    </div>
  );
};

export default Dvp;

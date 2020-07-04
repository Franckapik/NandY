import React from "react";
import Dat from "../devtools/Dat";
import FPSStats from "react-fps-stats";
import Keyboard from "../devtools/Keyboard";
import GCanvas from "../components/Gcanvas.js";

const Dvp = () => {
  //const [canvas, setCanvas] = useState("c5");

  return (
    <div>
      {/*<Dat />*/}
      <FPSStats />
    {/* <ServerLink />*/}
      <Keyboard />
      <GCanvas />
    { /* <Board />*/}
    </div>
  );
};

export default Dvp;

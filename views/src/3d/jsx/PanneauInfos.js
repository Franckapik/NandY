import React from "react";
import { Text } from "drei";
import Infos from './Infos';
import useStore from "../../store/zstore";

export default function PanneauInfos(props) {
  const signTxt = useStore(state => state.info)
  const changeContent = useStore(state => state.changeContent)
  const togglePop = useStore(state => state.togglePop)


  return (
    <group {...props} onClick={()=> {
      changeContent('info');
      togglePop();

    }}>
    <Text
      position={[0,5.6,0.26]}
      color={"yellow"}
      fontSize={"0.4"}
      lineHeight={"2"}
      letterSpacing={"0.1"}
      textAlign={"center"}
      font="./fonts/led.ttf"
      anchorX="center"
      maxWidth={"4.5"}
      anchorY="middle"
    >
      {signTxt}
    </Text>
    <Infos/>
    </group>

  );
}

import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import { Text } from "drei";
import Infos from './Infos';
import store from '../../store/store'

import { useSelector } from "react-redux";

export default function PanneauInfos(props) {
  const { viewport } = useThree();
  const txt = useSelector((state) => state.assets.panneauInfos)

  return (
    <group {...props} onClick={()=> {
      store.dispatch({type : 'CHANGE CONTENT', content : 'info'}); 
      store.dispatch({type : 'OPEN MODAL'})
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
      {txt}
    </Text>
    <Infos/>
    </group>

  );
}

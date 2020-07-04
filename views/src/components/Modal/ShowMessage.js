import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";

export const ShowMessage = ({msgId}) => {
const msg = useSelector(state => state.assets.msg)  
  return (
    <ul>
      <li><h2>Message n° {msgId}</h2></li>
      <li><h3>Auteur : {msg[msgId].firstName}</h3></li>
      <li><h4>Titre : {msg[msgId].title}</h4></li>
      <li><h4>Message : {msg[msgId].msg}</h4></li>
    </ul>
  );
};

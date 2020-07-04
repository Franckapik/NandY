import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";

export const ShowIdea = ({ideaId}) => {
const msg = useSelector(state => state.assets.idea)  
  return (
        <ul>
        <li><h2>Idée n° {ideaId}</h2></li>
        <li><h4>Titre : {msg[ideaId].title}</h4></li>
        <li><h4>Explication : {msg[ideaId].msg}</h4></li>
      </ul>
  );
};

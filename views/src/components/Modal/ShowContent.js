import React from "react";
import useStore from '../../store/zstore';

export const ShowContent = ({category, popid}) => {
const message = useStore(state => state[category])
  return Object.entries(message[popid]).map((key, i) => {
    return (<h3>{key[0]} : {key[1]}</h3>)
  }) 
};

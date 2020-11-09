import React from 'react'
import useMouvement from '../../devtools/useMouvement.js'




export default function Joueur(props) {

const ref = useMouvement(props.position); //faire passer la props.position dans useMouvement pour la position initiale.

  return (<mesh ref={ref} >
    <sphereGeometry attach="geometry" radius={1} />
    <meshLambertMaterial attach="material" color={props.color}/>
  </mesh>)
}

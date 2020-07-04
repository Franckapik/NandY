import React from 'react'
import useMouvement from '../../devtools/useMouvement.js'




export default function Joueur(props) {

const ref = useMouvement();

  return (<mesh ref={ref} >
    <sphereGeometry attach="geometry" radius={1} />
    <meshLambertMaterial attach="material" color={props.color}/>
  </mesh>)
}

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { Sphere } from 'drei'

import { Vehicle } from 'yuka'
import { useYuka } from '../../devtools/useYuka2.js'


const  Character = (props) => {

  const [ref] = useYuka({ type: Vehicle, ...props })



  return(<Sphere ref={ref} position ={[0,3,-5]}>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>)

}

export default Character
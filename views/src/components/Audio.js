import React, { useEffect, useMemo, useRef } from 'react'
import { useUpdate } from 'react-three-fiber'
import {  PositionalAudio } from 'drei'


const Audio = (props) => {

  return (
    <mesh {...props}>
    <boxBufferGeometry attach="geometry" />
    <meshBasicMaterial attach="material" color="hotpink" />
    <PositionalAudio url={props.url} distance={0.5} loop={false}  />
  </mesh>
  )
}

export default Audio

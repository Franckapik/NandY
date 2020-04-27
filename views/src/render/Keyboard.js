import {useHotkeys} from 'react-hotkeys-hook'
import React, {useState, Suspense, useEffect, useRef} from 'react'
import {Canvas, extend, Dom, useFrame} from 'react-three-fiber'
import useStore from '../store/store'



const KeyControls= (props) => {

  const { backw, forw, left, right, stop } = useStore()
  useHotkeys('up', (event, handler) => {
    if (event.type=== 'keydown') {
      forw()
    } else {
      stop()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('q', () => backw());
  useHotkeys('z', () => left());
  useHotkeys('x', () => right());

  return (
<Dom>Controls : Q, D, Z, X</Dom>
  )
}

export default KeyControls

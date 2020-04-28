import {useHotkeys} from 'react-hotkeys-hook'
import React, {useState, Suspense, useEffect, useRef} from 'react'
import {Canvas, extend, Dom, useFrame} from 'react-three-fiber'
import useStore from '../store/store'



const KeyControls= (props) => {

  const { backw, forw, left, right, stop, currentId, playersList, set} = useStore()

  useHotkeys('up', (event, handler) => {
    if (event.type=== 'keydown') {
      forw()
    } else {
      //stop()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('down', (event, handler) => {
    if (event.type=== 'keydown') {
      backw()
    } else {
      //stop()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('left', (event, handler) => {
    if (event.type=== 'keydown') {
      left()
    } else {
      //stop()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('right', (event, handler) => {
    if (event.type=== 'keydown') {
      right()
    } else {
      //stop()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('q', () => backw());
  useHotkeys('z', () => left());
  useHotkeys('x', () => right());

  return null
}

export default KeyControls

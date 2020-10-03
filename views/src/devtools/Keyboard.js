import {useHotkeys} from 'react-hotkeys-hook'
import useStore from '../store/zstore';

export default () => {
const changeForce = useStore(state => state.changeForce)
const changeRotation = useStore(state => state.changeRotation)

useHotkeys('up', event => {
  if (event.type === "keydown") {
    changeForce('-5')
  } else if (event.type === 'keyup') {
    changeForce('0')
  } 
}, { keyup: true});
useHotkeys('down', event => {
  if (event.type === "keydown") {
    changeForce('5')
    } else if (event.type === 'keyup') {
    changeForce('0')
    } 
}, { keyup: true});
useHotkeys('up+left, down+left, left', event => {
  if (event.type === "keydown") {
    changeRotation('-3')
    } else if (event.type === 'keyup') {
    changeRotation('0')
    } 
}, { keyup: true});
useHotkeys('up+right, down+right, right', event => {
  if (event.type === "keydown") {
    changeRotation('3')
    } else if (event.type === 'keyup') {
    changeRotation('0')
    } 
}, { keyup: true});

  return null
}


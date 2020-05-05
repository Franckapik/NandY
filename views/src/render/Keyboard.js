import {useHotkeys} from 'react-hotkeys-hook'
import {useStoreActions } from 'easy-peasy';

const KeyControls= (props) => {

const moveUP = useStoreActions(action => action.moveUP)
const moveDOWN = useStoreActions(action => action.moveDOWN)

useHotkeys('up', event => {
  if (event.type === "keydown") {
    moveUP('up')
  } else if (event.type === 'keyup') {
    moveDOWN('up')
  } 
}, { keyup: true});
useHotkeys('down', event => {
  if (event.type === "keydown") {
    moveUP('down')
  } else if (event.type === 'keyup') {
    moveDOWN('down')
  } 
}, { keyup: true});
useHotkeys('left', event => {
  if (event.type === "keydown") {
    moveUP('left')
  } else if (event.type === 'keyup') {
    moveDOWN('left')
  } 
}, { keyup: true});
useHotkeys('right', event => {
  if (event.type === "keydown") {
    moveUP('right')
  } else if (event.type === 'keyup') {
    moveDOWN('right')
  } 
}, { keyup: true});

  return null
}

export default KeyControls

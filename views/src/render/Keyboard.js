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

  return null
}

export default KeyControls

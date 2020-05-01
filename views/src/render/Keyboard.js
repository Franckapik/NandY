import {useHotkeys} from 'react-hotkeys-hook'
import useStore from '../store/store'



const KeyControls= (props) => {

  const { backw, forw, left, right, reset} = useStore()

  useHotkeys('up', (event, handler) => {
    if (event.type=== 'keydown') {
      forw()
    } else {
      reset()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('down', (event, handler) => {
    if (event.type=== 'keydown') {
      backw()
    } else {
      reset()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('left', (event, handler) => {
    if (event.type=== 'keydown') {
      left()
    } else {
      reset()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('right', (event, handler) => {
    if (event.type=== 'keydown') {
      right()
    } else {
      reset()
    }
  }, {keyup : true, keydown: true});
  useHotkeys('q', () => backw());
  useHotkeys('z', () => left());
  useHotkeys('x', () => right());

  return null
}

export default KeyControls

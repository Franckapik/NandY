import {useHotkeys} from 'react-hotkeys-hook'
import store from '../store/store';

export default () => {

useHotkeys('up', event => {
  if (event.type === "keydown") {
    store.dispatch({type: 'KEYARROWUP' })
  } else if (event.type === 'keyup') {
    store.dispatch({type: 'KEYUP' })
  } 
}, { keyup: true});
useHotkeys('down', event => {
  if (event.type === "keydown") {
    store.dispatch({type: 'KEYARROWDOWN' })
  } else if (event.type === 'keyup') {
    store.dispatch({type: 'KEYUP' })
  } 
}, { keyup: true});
useHotkeys('left', event => {
  if (event.type === "keydown") {
    store.dispatch({type: 'KEYARROWLEFT' })
  } else if (event.type === 'keyup') {
    store.dispatch({type: 'KEYUP' })
  } 
}, { keyup: true});
useHotkeys('right', event => {
  if (event.type === "keydown") {
    store.dispatch({type: 'KEYARROWRIGHT' })
  } else if (event.type === 'keyup') {
    store.dispatch({type: 'KEYUP' })
  } 
}, { keyup: true});

  return null
}


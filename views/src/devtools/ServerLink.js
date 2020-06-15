import {useEffect} from 'react'
import { socket } from '../Socket';
import useSocketEvent from '../hooks/useSocketEvent'
import {useSelector, useDispatch} from 'react-redux'

import store from '../store/store';

const ServerLink = (props) => {

  //new player
  socket.emit('new player');

  //socket, name, handler, dependencies
  useSocketEvent(socket, 'id', data => store.dispatch({type : 'ID', id: data}), 'whoiam') 
  let keys = useSelector(state => state.keys)
  let erwinPosition = useSelector(state => state.profile.position)

  useEffect(() => {
    socket.emit('movement', {keys: keys, erwinPosition: erwinPosition});
  }, [keys])

  return null
}

export default ServerLink;
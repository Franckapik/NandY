import {useEffect, useState} from 'react'
import useSocketEvent from '../hooks/useSocketEvent'
import {useSelector, useDispatch} from 'react-redux'

import store from '../store/store';

/*
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

  socket.on('update', (data) => {
  store.dispatch({
    type: "SET POSITION",
    position: data,
  })  
}
  )

  return null
}*/

const ServerLink = () => {

  var ws = new WebSocket("ws://localhost:8000");
  ws.onmessage = function (event) {
  store.dispatch({
    type: "SET POSITION",
    position: event.data,
  }) 
  
  };
  
  return null
}

export default ServerLink;
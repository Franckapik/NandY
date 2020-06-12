import { socket } from '../Socket';
import useSocketEvent from '../hooks/useSocketEvent'
import store from '../store/store';

const ServerLink = (props) => {

  //new player
  socket.emit('new player');

  //socket, name, handler, dependencies
  useSocketEvent(socket, 'id', data => store.dispatch({type : 'ID', id: data}), 'whoiam')

  return null
}

export default ServerLink;
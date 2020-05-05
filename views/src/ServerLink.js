import {useEffect} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {socket} from './Socket';


const ServerLink = (props) => {
    const movement = useStoreState(state => state.movement)
    const updatePlayers = useStoreActions(actions => actions.updatePlayers)
    const whoiam = useStoreActions(actions => actions.whoiam)
    
    function useSocketEvent(socket, event, handler, dependencies) {
      useEffect(() => {
        const uniqueHandler = (...args) => {
          return handler(...args);
        };
        
        socket.on(event, uniqueHandler);
        
        return () => socket.off(event, uniqueHandler);
      }, [dependencies, event, handler, socket]);
    }
    
      socket.emit('new player');
    
      
    
      useSocketEvent(socket, 'id', data => {whoiam(data)}, whoiam)
      useSocketEvent(socket, 'state', players => { updatePlayers(players) }, updatePlayers)
    
      useEffect(()=> {
        socket.emit('movement', movement);
      }, [movement])
    
    
      return null
    }

    export default ServerLink;
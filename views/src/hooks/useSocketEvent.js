import {useEffect} from 'react'

export default function useSocketEvent(socket, event, handler, dependencies) {
    useEffect(() => {
      const uniqueHandler = (...args) => {
        return handler(...args);
      };

      socket.on(event, uniqueHandler);

      return () => socket.off(event, uniqueHandler);
    }, [dependencies, event, handler, socket]);
  }
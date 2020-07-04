import {Box} from 'drei'
import React from 'react'
import { useSphere, useBox } from 'use-cannon'
import store from '../../store/store'



const Cube = (props) => {
    const [cube, api] = useBox(()=> ({
        mass : 1,
        position : props.position
    }))

return (
<Box ref={cube} {...props} onClick={()=> {store.dispatch({type : 'CHANGE CONTENT', content : 'msg'}); store.dispatch({type : 'OPEN MODAL'})}}>
  <meshBasicMaterial attach="material" color="blue" />
</Box>
)
}

export default Cube;
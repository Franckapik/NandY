import React from 'react';
import store from '../store/store'
import {useEffect, useCallback} from 'react'
import { useFrame } from 'react-three-fiber';
import { useSelector, useDispatch } from 'react-redux';


const  Board = () => {
//hors canvas
let selectedMesh = useSelector(state => state.items.items)
const dispatch = useDispatch();
const putMesh = useCallback(
    (uuid) => dispatch({ type: 'USE MESH', uuid : uuid }),
    [dispatch]
  )


    return (
        <div className='mainDom'>
            <center>
        Carnet de voyage
        <ul>
        {selectedMesh.map((a,i) => {
            return(
                <li key={"key"+ i} onClick={()=> putMesh(a)}>{a.uuid}</li>
            )
        }
            )}

        </ul>

            </center>
        </div>
    )
}

export default Board;

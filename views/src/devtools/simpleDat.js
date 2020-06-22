import React from 'react';
import {useSelector} from 'react-redux'

const SimpleDat = () => {
const position = useSelector(state => state.profile.positionSocket)

return (
    <div><center>{position}</center></div>
)
}

export default SimpleDat
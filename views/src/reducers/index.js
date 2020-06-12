import { combineReducers } from 'redux'

import keyReducer from './keyReducer'
import profileReducer from './profileReducer'
import cameraReducer from './cameraReducer'

export default combineReducers({
    profile : profileReducer,
    keys : keyReducer,
    camera : cameraReducer
})
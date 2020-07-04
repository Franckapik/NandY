import { combineReducers } from 'redux'

import keyReducer from './keyReducer'
import positionReducer from './positionReducer'
import cameraReducer from './cameraReducer'
import carnetReducer from './carnetReducer'
import domReducer from './domReducer'
import assetsReducer from './assetsReducer'

export default combineReducers({
    profile : positionReducer,
    keyboard : keyReducer,
    camera : cameraReducer,
    carnet : carnetReducer,
    dom : domReducer,
    assets : assetsReducer
})
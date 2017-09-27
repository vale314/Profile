import { combineReducers } from "redux"

import home from './reducers/home/index.js'
import authenticated from './reducers/auth/authenticate.js'

export default combineReducers({
    home:home,
    authenticated:authenticated
})

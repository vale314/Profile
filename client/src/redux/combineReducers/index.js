import { combineReducers } from "redux"

import home from './reducers/home/index.js'
import authenticated from './reducers/auth/authenticate.js'
import scroll from './reducers/scroll/index.js'

import filters from './reducers/filters/filters.js'

export default combineReducers({
    home:home,
    authenticated:authenticated,
    scroll:scroll,
    filters:filters
})

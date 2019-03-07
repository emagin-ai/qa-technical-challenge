import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import measurements from './measurements'

const ChartApp = combineReducers({
    toastr: toastrReducer,
    measurements
})

export default ChartApp

import * as types from '../constants/ActionTypes'


const measurements = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MEASUREMENT:
            return state.concat( action.measurement )
        default:
            return state
    }
}

export default measurements

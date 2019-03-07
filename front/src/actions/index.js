import * as types from '../constants/ActionTypes'

export const addMeasurement = (measurement) => ({
  type: types.ADD_MEASUREMENT,
  measurement
})

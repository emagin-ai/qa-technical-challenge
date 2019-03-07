import { connect } from 'react-redux'
import ChartComponent from '../components/Chart'

export const Chart = connect(state => ({
  measurements: state.measurements
}), {})(ChartComponent)

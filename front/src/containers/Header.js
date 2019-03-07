import { connect } from 'react-redux'
import HeaderComponent from '../components/Header'


const mapStateToProps = state => {
    if (state.measurements.length === 0) {
        return {
          orgName: "",
          sensorName: ""
        }

    } else {
        return {
          orgName: state.measurements.slice(-1)[0].orgName ,
          sensorName: state.measurements.slice(-1)[0].sensorName
        }

    }

}

export const Header = connect(
    mapStateToProps
)(HeaderComponent)

import moment from 'moment';

import { addMeasurement } from '../actions'

import {toastr} from 'react-redux-toastr'


// populateMeasurementsList

const setupSocket = (dispatch) => {
    const socket = new WebSocket('ws://localhost:8080')

    socket.onerror = () => {
        toastr.error('Server error', 'Please check if the server is started')
    }

    socket.onmessage = (event) => {
        // console.log(event.data)
        const data = JSON.parse(event.data)
        if (Array.isArray(data)) {
            data.forEach( el => {
                if (el.value < 1 || el.value>3){
                    // show a notification in case of an anomaly with the value
                    toastr.warning('Anomaly with chlorine value', 'Recorded a value of '+el.value)
                }
                el["timestamp"] = moment(el.timestamp).format("D-MMM-YY HH:mm");
                // console.log(el)
                dispatch(addMeasurement(el))
            })
        } else {
            if (data.value < 1 || data.value>3){
                // show a notification in case of an anomaly with the value
                toastr.warning('Anomaly with chlorine value', 'Recorded a value of '+data.value)
            }
            data["timestamp"] = moment(data.timestamp).format("D-MMM-YY HH:mm");
            dispatch(addMeasurement(data))
        }

    }

    return socket
}

export default setupSocket

import React from 'react'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import { Chart } from './containers/Chart'
import { Header } from './containers/Header'


const App = () => (
  <div id="container">
    <Header />
    <Chart />
  </div>
)

export default App

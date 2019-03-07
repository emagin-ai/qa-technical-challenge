import React from 'react'

const Header = ({ orgName, sensorName }) => (
  <h1>
     Measurements of {sensorName} for <i> {orgName} </i>
  </h1>
)

export default Header

import { LineChart } from 'react-easy-chart';
import React from 'react';

const Chart = ({ measurements }) => (
    <div>
        <LineChart
            xType={'time'}
            axes
            grid
            width={900}
            height={500}
            xTicks={5}
            yTicks={5}
            datePattern={'%d-%b-%y %H:%M'}
            axisLabels={{x: 'TimeStamp', y: 'Chlorine measurement'}}
            data={[measurements.map(m => ({x: m.timestamp, y: m.value}))]}
            yDomainRange={[1, 3]}
            style={{
              '.line0': {
                stroke: 'green'
              }
            }}
        />


    </div>
)


export default Chart

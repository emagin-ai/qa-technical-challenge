# QA Lead Technical Challenge

## Situation

The company has been contracted to provide a monitoring solution for a local community
swimming pool.  The pool has a chlorine sensor that measures the chlorine levels
at set intervals and then transmits the measurements.

The engineering team has built a server to supply the data from the customer's sensor.  On top of that they have built a real-time web dashboard to visualize the data and send alerts when the cholorine level is not acceptable. The front end dynamically loads historical and real-time data when it starts up.

## Requirements

- a web page in HTML and JavaScript that connects to the server via websocket
and then plots the data returned in a line chart.  
- the page needs to show thename of the location being monitored  
- the chart needs to show the time along the x-axis and the chlorine level along the y-axis
- the chlorine level in measured in parts per million (ppm)
- the page also needs to alert the operator if the chlorine level drops below 1.0 ppm or above 3.0 ppm.

On first connection, the server will return an array containing the previous 24
hours of data in the following format:
```
{
  orgName: "Community Pool",
  orgID: 7,
  sensorName: "Chlorine Level",
  sensorID: 21,
  timestamp: timestamp,
  value: number
}
```

Once the existing data has been sent, the server will then start to return the
real time measurements.  The chlorine level is measured every five minutes to
make sure that it stays within the acceptable range.  For the purposes of this
exercise, the server will actually be sending the data every five seconds.  The
data is in the same format as the historic data except that it is not an array.

The server will continue to send data until the client disconnects.

## Instructions:
- given these high level requirements, write a quick *test strategy* and *test plan* to cover off the use cases of the overall system
- indicate how you would test the system (manual vs automated or otherwise)
- write some automated tests where applicable 
- Bonus points if you can get the application running (details below) and your automated tests run against it

## Running the Server

The server is written in javascript for nodejs and runs from the command line.
It runs on port `8080`.  Follow these instructions to run it:

1. Install Nodejs
2. Install the `ws` and `moment` packages into your Node environment
3. Run the server with the command `node server.js`
4. To stop the server use `Ctrl-C`

## Running the front end web application

To run the the front end, first install the challenge's dependencies, then install the dependencies in front/:
```
cd front
npm install
```
First run the server, then run from front/:
```
npm start
```
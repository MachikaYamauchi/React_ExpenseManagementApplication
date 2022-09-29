import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Need to caliculate the total Max value, so we wanna look at all the month and find the biggest value across all the month 
  const datePointValues = props.dataPoints.map(dataPoint => dataPoint.value);  // props.dataPoinst value is object so transform them from object to numbers because "max()" function needs arguments like "max(1, 2, 3)"
  const totalMaximum = Math.max(...datePointValues);
  // 'max() wnats a list of argumenst but "dataPointValues" is the Array of numbers so Use ...spread operator to pull out all the array elements and add them as stand alone arguments
  return (
    <div className="chart">
      {/* creat more flexible chart which is necessaly not restricted to months and 12 data points, which means teh component which use the Chart Compos can decide how many data points should be rendered*/}
      {/* Creat as many ChatBar Compos as we have data points */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
         key={dataPoint.label}
         value={dataPoint.value}
         maxValue={totalMaximum} 
         label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

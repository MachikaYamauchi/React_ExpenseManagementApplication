import React from "react";

import "./ChartBar.css";

const Chartbar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // give us the percentage 0-100% by which this bar should be filled
    // we want to set this as the height as the CSS styke height for the div of "chart-bar__fill"
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* To style an element with the inline style attribute with React, the value must be a JavaScript object: */}
        <div 
            className="chart-bar__fill" 
            style={{height:barFillHeight}} // To style an element with the inline style attribute, the value must be a JavaScript object:
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;

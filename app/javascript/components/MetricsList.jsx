import MetricItem from "./MetricItem";
import React, { useState } from "react";

const MetricsList = (props) => {
  // if (props.items.length === 0) {
  //   return <div><h1>Found no metrics...</h1></div>;
  // }

  return (<ul className={`metrics-list rounded bg-white justify-center h-auto w-10/12 flex flex-col ${props.isHidden ? "hidden" : ""}`}>
  {props.items.map((metric) => (
    <MetricItem key={metric.id} name={metric.name} value={metric.value} date={metric.date} />
  ))}
  </ul>
  );
}

export default MetricsList;

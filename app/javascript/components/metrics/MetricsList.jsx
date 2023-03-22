import MetricItem from "./MetricItem";
import React from "react";

const MetricsList = (props) => {
  return (<ul className={`metrics-list rounded bg-white justify-center h-auto w-10/12 flex flex-col ${props.isHidden ? "hidden" : ""}`}>
  {props.items.map((metric) => (
    <MetricItem key={metric.id} name={metric.name} value={metric.value} date={metric.date} />
  ))}
  </ul>
  );
}

export default MetricsList;

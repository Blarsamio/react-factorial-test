import React, { useState } from 'react';
import MetricsList from './MetricsList';
import Chart from '../chort/Chart';

const Metrics = (props) => {
  return (
      <div className='m-list w-auto h-96 overflow-scroll flex flex-col items-center'>
        <MetricsList items={props.items} />
      </div>
  );
}

export default Metrics;

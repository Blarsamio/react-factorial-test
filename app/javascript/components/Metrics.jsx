import React, { useState } from 'react';
import MetricsList from './MetricsList';
import Chart from './chort/Chart';

const Metrics = (props) => {
  const [isMetricsListVisible, setIsMetricsListVisible] = useState(true);

  const toggleMetricsListVisibility = () => {
    setIsMetricsListVisible(!isMetricsListVisible);
  };

  return (
    <div className='container h-auto w-1/2 flex bg-radical text-white grow flex-col p-1 self-center'>
      <div className="w-full h-auto flex flex-row justify-between items-center mt-5">
        <Chart />
      </div>
      <div className='w-auto h-60 overflow-scroll flex flex-col items-center'>
        <button onClick={toggleMetricsListVisibility} className="btn2 mb-5 w-30 sticky top-0">
          <p>{isMetricsListVisible ? 'Hide Metrics List' : 'Show Metrics List'}</p>
        </button>
        {isMetricsListVisible && <MetricsList items={props.items} />}
      </div>
    </div>
  );
}

export default Metrics;

import React from 'react';
import formatDate from './utility/Date';

const MetricItem = (props) => {
  return <div className='container h-12 w-10/12 bg-white flex text-radical rounded flex-row self-center'>
    <div className="w-full flex flex-row justify-between items-center my-2.5">
      <div className="text-cardinal"><h2 className='text-radical'>{formatDate(props.date)}</h2></div>
      <div><h1 className='text-xl text-cardinal'>{props.name}</h1></div>
      <div className=''><h3>{props.value}</h3></div>
    </div>
  </div>
}

export default MetricItem;

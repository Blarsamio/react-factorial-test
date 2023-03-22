import React from 'react';
import GetData from './components/GetData';
import Metrics from './components/Metrics';
import Chart from './components/chort/Chart';
import RightMenu from './components/utility/Menu';

const App = () => {
  const data = GetData();

  return (
    <div className='flex flex-col h-full w-full justify-center'>
      <RightMenu />
      <Metrics items={data} />
    </div>
  );
};

export default App;

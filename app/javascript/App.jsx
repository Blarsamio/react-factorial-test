import React , { useState } from 'react';
import RightMenu from './components/utility/RightMenu';
import Chart from './components/chort/Chart';
import MetricForm from './components/metrics/Form';

const MemoChart = React.memo(Chart);

const App = (props) => {
  const [isFormVisible, setisFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setisFormVisible(!isFormVisible);
  };

  return (
    <div className='flex flex-col h-full w-full justify-center'>
      <RightMenu />
      <div className='container h-auto w-1/2 flex bg-radical text-white grow flex-col p-1 self-center'>
        <div className="w-full flex flex-row justify-between items-center mt-5">
          <MemoChart items={props.items} />
        </div>
        <div className='w-full self-center h-auto flex flex-col'>
          <button onClick={toggleFormVisibility} className="w-30 self-center">
            <p>{isFormVisible ? 'Hide Metric form' : 'Add new Metric'}</p>
          </button>
          {isFormVisible && <MetricForm />}
        </div>
      </div>
    </div>
  );
};

export default App;

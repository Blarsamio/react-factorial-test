import React from 'react';

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/v1/metrics')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return (
    <div>
      Metrics
      {data.map(({name}) => <div>{name}</div>)}
    </div>
  );
};

export default App;

import React from 'react';
const GetData = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/json')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return data;
}

export default GetData;

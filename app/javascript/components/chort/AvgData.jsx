import React, { useState, useEffect } from 'react';

const AvgData = (freq) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/${freq}_average`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
}

export default AvgData;

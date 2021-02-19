import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('/home')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  return <>{data.length ? data : 'bye world!'}</>;
};

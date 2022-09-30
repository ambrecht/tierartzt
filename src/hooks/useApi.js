import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MARKUP
export default function useApi(ID) {
  const [allPatients, setAllPatients] = useState([]);
  const [allPractices, setAllPractices] = useState([]);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  useEffect(() => {
    axios
      .get('  http://localhost:3004/patienten')
      .then(function (response) {
        setAllPatients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ID, refreshIndex]);

  useEffect(() => {
    axios
      .get('  http://localhost:3004/praxen')
      .then(function (response) {
        setAllPractices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ID, refreshIndex]);

  return [allPractices, allPatients, refresh];
}

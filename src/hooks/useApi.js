import React, { useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';

//MARKUP
export default function useApi() {
  const [allPatients, setAllPatients] = useState([]);
  const [allPractices, setAllPractices] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('  http://localhost:3004/patienten')
      .then(function (response) {
        setAllPatients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useLayoutEffect(() => {
    axios
      .get('  http://localhost:3004/praxen')
      .then(function (response) {
        setAllPractices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { allPractices, allPatients };
}

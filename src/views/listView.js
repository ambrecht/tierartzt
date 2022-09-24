import styled from 'styled-components';
import PatientList from '../components/patientList';
import PracticesList from '../components/practicesList';
import axios from 'axios';
import AddButton from '../components/AddButton';

import React, { useState, useEffect } from 'react';

//MARKUP
export default function ListView(props) {
  const [allPatients, setAllPatients] = useState([]);
  const [PatientID, setPatientID] = useState(0);

  const [allPractices, setAllPractices] = useState([]);
  const [practicID, setPracticID] = useState(0);

  useEffect(() => {
    axios
      .get('  http://localhost:3004/patienten')
      .then(function (response) {
        setAllPatients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('  http://localhost:3004/praxen')
      .then(function (response) {
        setAllPractices(response.data);
        console.log('HOIER', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [allPatients]);

  return (
    <Wrapper>
      <List>
        {PatientID}
        <PatientList
          patients={allPatients}
          onClickPatient={setPatientID}
        ></PatientList>
        <AddButton></AddButton>
      </List>
      <List>
        <PracticesList practices={allPractices}></PracticesList>
        <AddButton></AddButton>
      </List>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: felx;
`;

const List = styled.div`
  display: flex;
  flex-direction: column ;
`;

import styled from 'styled-components';
import PatientList from '../components/patientList';
import PracticesList from '../components/practicesList';
import AddButton from '../components/AddButton';

import React, { useState, useEffect } from 'react';

//MARKUP
export default function ListView(props) {
  return (
    <Wrapper>
      <List>
        LISTE ALLER PATIENTEN:
        {props.PatientID}
        <PatientList
          patients={props.allPatients}
          onClickPatient={props.setID}
        ></PatientList>
        Füge einen Patienten hinzu:
        <Button
          onPress={() => {
            props.onClickShow('patient');
          }}
        >
          +
        </Button>
      </List>
      <List>
        LISTE ALLER PRAXEN:
        <PracticesList
          practices={props.allPractices}
          onClickPractic={props.setID}
        ></PracticesList>
        Füge eine Praxis hinzu:
        <Button
          onPress={() => {
            props.onClickShow('practice');
          }}
        >
          +
        </Button>
      </List>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: felx;
  max-width: 1080px;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const Button = styled(AddButton)`
  display: fixed;
  background-color: red;
  width: 500vw;
`;

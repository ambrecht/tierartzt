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
        {props.PatientID}
        <PatientList
          patients={props.allPatients}
          onClickPatient={props.setID}
        ></PatientList>
        <AddButton
          onPress={() => {
            props.onClickShow('patient');
          }}
        >
          +
        </AddButton>
      </List>
      <List>
        <PracticesList
          practices={props.allPractices}
          onClickPractic={props.setID}
        ></PracticesList>
        <AddButton
          onPress={() => {
            props.onClickShow('practice');
          }}
        >
          +
        </AddButton>
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

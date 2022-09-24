import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import AddButton from './AddButton';

//Markup

export default function PatientList(props) {
  return (
    <Container>
      {props.patients.map((patient) => {
        return (
          <Box
            onClick={() => {
              console.log(patient.pet.image);
              props.onClickPatient(patient.id);
            }}
          >
            <Bild alt="" src={patient.pet?.image}></Bild>
            <h1>Tiername: {patient.pet?.name}</h1>
            <p>Letzter Besuch:{patient.pet?.medical_history.last_visit}</p>
            <p>Besitzer: {patient.pet_owner_name}</p>
          </Box>
        );
      })}
    </Container>
  );
}

// Style

const Container = styled.div`
  max-width: 490px;
  width: 100%;
  border-radius: 12px;
`;

const Box = styled.article`
  font-size: var(--fs-400);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
`;

const Bild = styled.img`
  width: 5rem;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const PetName = styled.p`
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: 1;
`;

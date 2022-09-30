import React from 'react';

import styled from 'styled-components';

//Markup

export default function PatientList(props) {
  return (
    <Container>
      {props.patients.map((patient) => {
        return (
          <Box
            key={patient.id}
            onClick={() => {
              props.onClickPatient({ type: 'patient', id: patient.id });
            }}
          >
            <Bild alt="" src={patient.pet?.image}></Bild>
            <PetName>{patient.pet?.name}</PetName>
            <Visit>
              Letzter Besuch:{patient.pet?.medical_history.last_visit}
            </Visit>
            <p>Besitzer: {patient.pet_owner_name}</p>
          </Box>
        );
      })}
    </Container>
  );
}

// Style

const Container = styled.div`
  width: 100%;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  padding: 1vw;
  gap: 10px;
`;

const Box = styled.article`
  font-size: var(--fs-400);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  text-align: center;
  transition: transform 0.8s;

  :hover {
    outline: dotted 1px #2c6c69;
    outline-offset: 2px;
    background-color: #ebebeb;
    img {
      transform: scale(2);
      float: left;
      z-index: 0;
      filter: grayscale(0%);
    }

    p {
      display: flex;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
  }
`;

const Bild = styled.img`
  width: 5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: grayscale(100%);
`;

const PetName = styled.p`
  font-size: var(--fs-500);
  font-weight: var(--fw-400);
  line-height: 1;
  color: black;
  padding: 1rem;
`;

const Visit = styled.p`
  font-size: var(--fs-300);
  font-weight: 00.5rem;
  line-height: 1;
  color: black;
`;

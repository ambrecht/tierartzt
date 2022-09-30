import React from 'react';
import styled from 'styled-components';

//Markup

export default function PatientList(props) {
  return (
    <Container>
      {props.practices.map((praxis) => {
        return (
          <Box
            key={praxis.id}
            onClick={() => {
              props.onClickPractic({ type: 'practice', id: praxis.id });
            }}
          >
            <h1>Praxis: {praxis.id}</h1>
            <Details>
              <p>{praxis.adress.street}</p>
              <p>
                {praxis.adress.postal_code} {praxis.adress.city}
              </p>
            </Details>
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
  font-size: var(--fs-300);
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 0.01rem solid;
  border-radius: 1rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  border-style: solid;
  text-align: center;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
    border: 0.01rem solid;
    border-radius: 1rem;
    background-color: #ebebeb;

    div {
      display: block;
    }
  }
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

const Details = styled.div`
  display: none;
`;

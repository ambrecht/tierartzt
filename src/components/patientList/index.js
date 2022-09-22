import React from 'react';
import styled from 'styled-components';

//Markup

export default function patientList() {
  return (
    <Container>
      <Box>
        <div class="flex">
          <div></div>
          <div>
            <h2 class="name">Daniel Clifford</h2>
            <p class="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </p>
        <p>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </Box>
    </Container>
  );
}

// Style

const Container = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;

  font-family: var(--ff-primary);
  font-weight: var(--fw-400);

  background-color: hsl(var(--clr-neutral-200));
`;

const Box = styled.article`
  font-size: var(--fs-400);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
`;

import React, { useState, useLayoutEffect, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import useApi from './hooks/useApi';

import PatientDetail from './views/patientDetailView';
import PracticeDetail from './views/practiceDetailView';
import ListView from './views/listView';
import FormView from './views/formView';
import Header from './components/Header';

//MARKUP

function App() {
  const [ShowFormView, setShowFormView] = useState(0);

  const [showDetail, setShowDetail] = useState(0);
  const [ID, setID] = useState(0);
  const [allPractices, allPatients, refresh] = useApi(ID);

  const allData = [...allPractices, ...allPatients];

  const closeDetail = () => {
    setShowDetail(0);

    setID(0);
  };

  const defineTarget = (id) => {
    setID(id);
    setShowDetail(...allData.filter((patient) => patient.id === id.id));
  };

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      {showDetail === 0 && ShowFormView === 0 && (
        <ListView
          setID={defineTarget}
          onClickShow={setShowFormView}
          allPatients={allPatients}
          allPractices={allPractices}
        ></ListView>
      )}

      {ShowFormView !== 0 && (
        <FormView
          view={ShowFormView}
          closeForm={setShowFormView}
          refresh={refresh}
        ></FormView>
      )}
      {showDetail !== 0 && ID.type === 'patient' && (
        <PatientDetail
          patient={showDetail.pet}
          closeDetail={closeDetail}
        ></PatientDetail>
      )}

      {showDetail !== 0 && ID.type === 'practice' && (
        <PracticeDetail
          animals={allPatients}
          practice={showDetail}
          closeDetail={closeDetail}
        ></PracticeDetail>
      )}
    </>
  );
}

export default App;

//STYLE

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


:root {

  font-family: '', impact;
  --clr-primary-400: 263 55% 52%;
  --clr-secondary-400: 217 19% 35%;
  --clr-secondary-500: 219 29% 14%;
  --clr-neutral-100: 0 0% 100%;
  --clr-neutral-200: 210 46% 95%;
  --clr-neutral-300: 0 0% 81%;

  --ff-primary: "Barlow Semi Condensed", sans-serif;

  --fw-400: 500;
  --fw-700: 600;

  --fs-300: 0.6875rem;
  --fs-400: 0.8125rem;
  --fs-500: 1.25rem;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  max-width: 100vw;

 

}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

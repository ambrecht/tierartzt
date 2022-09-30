import styled from 'styled-components';
import AddButton from '../components/AddButton';
import PatientList from '../components/patientList';

//MARKUP
export default function PatientDetail(props) {
  const Patients = props.animals.filter(
    (patient) => patient.praxis_id === props.practice.id,
  );

  return (
    <Wrapper>
      <AddButton onPress={() => props.closeDetail(0)}>X</AddButton>
      <Box>
        Zu dieser Praxis gehören folgenden Patienten:
        <PatientList patients={Patients}></PatientList>
        Folgender Mitarbeiter ist für die Praxis verantwortlich:
        <h3>{props.practice.employes.employes}</h3>
        Erreichbar unter der Nummer:
        {props.practice.employes.number}
      </Box>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: felx;
  max-width: 1080px;
  margin: 0 auto;
`;

const Box = styled.article`
  font-size: var(--fs-400);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  :hover {
    outline: dotted 1px #2c6c69;
    outline-offset: 2px;
  }
`;

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
      Zu dieser Praxis gehören folgenden Patienten:
      <PatientList patients={Patients}></PatientList>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div``;

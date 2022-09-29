import styled from 'styled-components';
import CreatePatient from '../components/createPatientForm';
import CreatePractice from '../components/createPracticeForm';
import AddButton from '../components/AddButton';
import useApi from '../hooks/useApi';

//LOGIC

//MARKUP
export default function MARKUP(props) {
  const { allPractices, allPatients } = useApi();
  return (
    <Wrapper>
      <AddButton onPress={() => props.closeForm(0)}>X</AddButton>
      {props.view === 'patient' && (
        <CreatePatient
          allPractices={allPractices}
          close={props.closeForm}
        ></CreatePatient>
      )}
      {props.view === 'practice' && (
        <CreatePractice close={props.closeForm}></CreatePractice>
      )}
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-flow: row-reverse, wrap;
`;

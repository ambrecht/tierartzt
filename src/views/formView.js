import styled from 'styled-components';
import CreatePatient from '../components/createPatientForm';
import AddButton from '../components/AddButton';

//LOGIC

//MARKUP
export default function MARKUP(props) {
  return (
    <Wrapper>
      <AddButton onPress={() => props.closeForm(0)}>X</AddButton>
      <CreatePatient></CreatePatient>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-flow: row-reverse, wrap;
`;

import styled from 'styled-components';
import AddButton from '../components/AddButton';

//MARKUP
export default function PatientDetail(props) {
  console.log(props);

  return (
    <Wrapper>
      <AddButton onPress={() => props.closeDetail(0)}>X</AddButton> Hier findest
      Tierliste und Informationen
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div``;

import styled from 'styled-components';
import AddButton from '../components/AddButton';

//MARKUP
export default function PatientDetail(props) {
  console.log(props);
  const {
    species,
    name,
    image,
    date_of_birth,
    pit_tag,
    vaccinations,
    medical_history,
  } = props.patient;

  return (
    <Wrapper>
      <AddButton onPress={() => props.closeDetail(0)}>X</AddButton> Hier findest
      du alle Details zu {name}:<img src={image}></img>
      <p>
        {name} ist ein {species}
      </p>
      <p>Er ist am {date_of_birth} geboren</p>
      <h4>Impfungen</h4>
      {vaccinations.map((vacc) => (
        <p>{vacc}</p>
      ))}
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div``;

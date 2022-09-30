import styled from 'styled-components';
import AddButton from '../components/AddButton';

//MARKUP
export default function PatientDetail(props) {
  const {
    species,
    name,
    image,
    date_of_birth,
    pit_tag,
    vaccinations,
    medical_history,
  } = props.patient;

  console.log(medical_history);

  return (
    <Wrapper>
      <AddButton onPress={() => props.closeDetail(0)}>X</AddButton> Hier findest
      du alle Details zu {name}:<img src={image}></img>
      <p>
        {name} ist ein {species}
      </p>
      <p>Er ist am {date_of_birth} geboren</p>
      <h4>
        {vaccinations
          ? 'Er wurde bereits geimpft'
          : 'Er wurde bisher noch nicht geimpft'}
      </h4>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;

  img {
    height: auto;
    width: auto;
    max-width: 66vw;
    max-height: 80vh;
    object-fit: contain;
  }
`;

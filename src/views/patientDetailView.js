import styled from 'styled-components';

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
  } = props?.patient?.[0]?.pet;
  console.dir(vaccinations);
  return (
    <Wrapper>
      {' '}
      Hier findest du alle Details zu {name}:<img src={image}></img>
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
const Wrapper = styled.div`
  background-color: red;
`;

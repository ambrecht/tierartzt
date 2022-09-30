import styled from 'styled-components';
import axios from 'axios';
import { createInput } from '../animalData/createAnimalInput';
import { uid } from 'uid';

import { useForm } from 'react-hook-form';
import { Animals } from '../animalData/listOfAnimals';

export default function CreatePatient(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const fetchImage = await axios.get(
      'https://dog.ceo/api/breeds/image/random',
    );

    const ApiInput = createInput(
      uid(),
      fetchImage.data.message,
      ...Object.values(data),
    );

    axios
      .post('http://localhost:3004/patienten', ApiInput, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    props.refresh();
    props.close(0);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label for="Besitzer">Besitzer:</label>
        <input
          type="text"
          placeholder="Besitzer"
          {...register('pet_owner_name', {})}
        />
        <label for="Praxis">Praxis:</label>
        <select {...register('praxis_id')}>
          {' '}
          {props.allPractices.map((item) => (
            <option value={item.id}>Praxis in {item.adress.city}</option>
          ))}
        </select>
        <label for="Name">Name des Tiers:</label>
        <input type="text" placeholder="Name" {...register('name', {})} />
        <label for="Art">Tierart:</label>
        <select name="Art" {...register('tier_art')}>
          {Animals.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <input type="date" placeholder="Geburt" {...register('DOB', {})} />
        <div>
          <label for="Pit">Chip:</label>
          <input
            type="checkbox"
            placeholder="pit_tag"
            {...register('pit_tag', {})}
          />
        </div>
        <label for="Impfung">Geimpft:</label>
        <input
          type="checkbox"
          placeholder="vaccinations"
          {...register('vaccinations', {})}
        />
        <label>Wann war der letzte Besuch?</label>
        <input
          type="date"
          placeholder="Wann war der letzte Besuch?"
          {...register('last_visit', {})}
        />
        <></>
        <label>Diagnose:</label>
        <textarea {...register('prior_illness', {})} />

        <input type="submit" />
      </Form>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1vw;
`;

const Form = styled.form`
  width: 66vw;
  display: grid;
  padding: 1vw;
  grid-gap: 10px;

  grid-auto-rows: 10vh, 10vh;
  grid-auto-columns: 20vw, 20vw;

  input + label:after {
    content: '*';
    font-size: 2.1em;
    position: relative;
    top: 6px;
    display: inline-flex;
    margin-left: 0.2ch;
    transition: color 1s;
  }
  input:invalid + label:after {
    color: red;
  }
  input:valid + label:after {
    color: green;
  }
  input:not([type='range']),
  textarea {
    min-height: 40px;
    padding: 2px;
    font-size: 17px;
    border: 1px solid #ebebeb;
    outline: none;
    transition: transform 0.4s, box-shadow 0.4s, background-position 0.2s;
    background: radial-gradient(400px circle, #fff 99%, transparent 99%),
      #f1f1f1;
    background-position: -400px 90px, 0 0;
    background-repeat: no-repeat, no-repeat;
    border-radius: 0;
    position: relative;
  }
  input:not([type='range']):focus,
  textarea:focus {
    background-position: 0 0, 0 0;
  }
`;

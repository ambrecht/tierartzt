import styled from 'styled-components';
import axios from 'axios';
import { uid } from 'uid';

import { createInput } from '../animalData/createPracticesInput';

import { useForm } from 'react-hook-form';

export default function CreatePatient(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const ApiInput = createInput(uid(), ...Object.values(data));

    axios
      .post('http://localhost:3004/praxen', ApiInput, {
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
        <label>Adresse:</label>
        <input type="text" placeholder="Straße" {...register('street')} />
        <input type="text" placeholder="Stadt" {...register('city')} />
        <input
          type="text"
          placeholder="Postleitzahl"
          {...register('postal_code')}
        />

        <label>Kontaktperson in der Praxis:</label>
        <input
          type="text"
          placeholder="Kontaktperson"
          {...register('employees_name')}
        />
        <input
          type="text"
          placeholder="Telefonnummer"
          {...register('number')}
        />

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

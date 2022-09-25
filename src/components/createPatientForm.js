import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export default function CreatePatient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('praxis_id')}></select>
        <input
          type="text"
          placeholder="Besitzer"
          {...register('pet_owner_name', {})}
        />
        <select {...register('Rasse')}></select>
        <input type="text" placeholder="Name" {...register('name', {})} />
        <input type="datetime" placeholder="Geburt" {...register('DOB', {})} />
        <div>
          Gechipt?
          <input
            type="checkbox"
            placeholder="pit_tag"
            {...register('pit_tag', {})}
          />
        </div>
        <input
          type="checkbox"
          placeholder="vaccinations"
          {...register('vaccinations', {})}
        />
        <input
          type="datetime"
          placeholder="last_visit"
          {...register('last_visit', {})}
        />
        <textarea {...register('prior_illness', {})} />
        <input
          type="url"
          placeholder="medical_reports"
          {...register('medical_reports', {})}
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

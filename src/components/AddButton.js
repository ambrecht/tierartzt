import styled from 'styled-components';

//MARKUP
export default function AddButton() {
  return <Button>+</Button>;
}

//STYLE
const Button = styled.button`
  width: 2vw;
  height: 2vw;
  background-color: blue;
  border-radius: 100%;
  cursor: pointer;
`;

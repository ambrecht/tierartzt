import styled from 'styled-components';

//LOGIC

//MARKUP
export default function MARKUP() {
  return (
    <a href="http://localhost:3000/">
      <Wrapper>VETERINARIUS</Wrapper>
    </a>
  );
}

//STYLE
const Wrapper = styled.div`
  color: black;
  font-size: 2rem;
  text-transform: uppercase;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

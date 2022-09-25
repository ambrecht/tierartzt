import styled from 'styled-components';

//MARKUP
export default function AddButton(props) {
  return <Button onClick={props.onPress}>{props.children}</Button>;
}

//STYLE
const Button = styled.button`
  width: 5vw;
  height: 5vw;
  padding: 1ex 1ch;
  border: solid 1px #ddd;
  text-decoration: none;
  border-radius: 100%;
  cursor: pointer;

  :hover {
    outline: dotted 1px #2c6c69;
    outline-offset: 2px;
  }
`;

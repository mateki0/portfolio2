import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 80vw;
  padding-left: 10px;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  margin-top: 10px;
  font-size: 16px;
  @media only screen and (min-width: 1024px) {
    width: 40vw;
    font-size: 18px;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
  }
`;
export default Input;

import styled from 'styled-components';

const SubmitButton = styled.button`
  padding: 15px 30px;
  width: 55%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: 'Goldman';
  letter-spacing: 1.4px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    font-size: 18px;
  }
  @media only screen and (min-width: 1280px) {
    width: 50%;
  }
`;
export default SubmitButton;

import styled from 'styled-components';

const SubmitButton = styled.button`
  padding: 15px 30px;
  width: 40%;
  border: none;
  border-radius: 5px;
  font-size: 18px;
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
`;
export default SubmitButton;

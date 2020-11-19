import styled from 'styled-components';

const Textarea = styled.textarea`
  height: 80px;
  padding: 10px 0 0 10px;
  margin-top: 10px;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  font-size: 16px;
  resize: none;

  @media only screen and (min-width: 1024px) {
    height: 100px;
    font-size: 18px;
  }
`;
export default Textarea;

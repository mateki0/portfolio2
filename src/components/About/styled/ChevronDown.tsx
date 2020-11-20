import styled, { keyframes } from 'styled-components';
const First = keyframes`
    0% {
        opacity:0;
    }
    25%{
      opacity:0.25;
    }
    50%{
      opacity:0.5;
    }
    100% {
      opacity:1;
    }
`;
const ChevronDown = styled.div`
  transition: all 3s;
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
  > * {
    padding-top: 30px;
    ::before {
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      background-color: rgb(24, 236, 141);
      transform: rotate(-45deg);
      left: 4px;
      animation: ${First} 1.5s linear infinite;
    }
    ::after {
      right: 8px;
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      background-color: rgb(24, 236, 141);
      transform: rotate(45deg);
      animation: ${First} 1.5s linear infinite;
    }
  }
`;

export default ChevronDown;

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
const ChevronDown = styled.div<{ isVisible: boolean }>`
  display: none;
  visibility: hidden;

  transition: all 3s;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 80%;
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
      background-color: #fff;
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
      background-color: #fff;
      transform: rotate(45deg);

      animation: ${First} 1.5s linear infinite;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: initial;
    visibility: visible;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
  }
`;

export default ChevronDown;

import styled, { keyframes, css } from 'styled-components';

const ExplodeTitle = keyframes`
  10% {
            transform: scaleY(0.2);
            transform-origin: 0 bottom 0;
  }
  20% {

            transform: scaleY(1.3);
            transform-origin: 0 bottom 0;
  }
  30% {

            transform: scaleY(0.7);
            transform-origin: 0 bottom 0;
  }
  40% {

            transform: scaleY(1);
            transform-origin: 0 bottom 0;
  }
  100% {
            transform: scaleY(1);
            transform-origin: 0 bottom 0;
  }
`;
const Heading = styled.h1<{ isVisible: boolean }>`
  font-size: 32px;
  font-family: 'Goldman', cursive;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 1px 1px #00b362, 2px 2px #00b362, 3px 3px #00b362, 4px 4px #00b362;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 62px;
  }
`;
export default Heading;

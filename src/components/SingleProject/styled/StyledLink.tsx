import styled, { keyframes, withTheme } from 'styled-components';

const Glow = keyframes`
  0%{
    text-shadow:0 0 10px #000;
  }
  15% {
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 1),
                 -2px -2px 10px rgba(0, 0, 0, 1);
  }
  30% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .7),
                 -2px -2px 4px rgba(0, 0, 0, .7);
  }
  50% {
    text-shadow: 10px 10px 20px rgba(0, 0, 0, .5),
                 -10px -10px 20px rgba(0, 0, 0, .5);
  }
`;
const StyledLink = styled.a`
  color: #fff;
  font-size: 22px;
  align-self: center;
  animation: ${Glow} 3s infinite;
  &:hover {
    animation: ${Glow} 1s infinite;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 20px;
  }
`;
export default StyledLink;

import styled from 'styled-components';

const Heading = styled.h2`
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

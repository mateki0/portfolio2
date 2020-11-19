import styled from 'styled-components';

const IconsWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 20px auto 0 auto;
  justify-content: space-between;

  svg {
    fill: #fff;
    width: 28px;
    height: 28px;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      fill: #000;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 10%;
  }
`;
export default IconsWrapper;

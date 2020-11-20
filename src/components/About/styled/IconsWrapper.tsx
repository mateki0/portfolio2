import styled from 'styled-components';

const IconsWrapper = styled.div`
  display: flex;
  min-width: 100px;
  width: 40%;
  margin: 30px auto 0 auto;
  justify-content: space-between;

  svg {
    fill: #fff;
    width: 28px;
    height: 28px;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      fill: rgb(24, 236, 141);
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 10%;
  }
`;
export default IconsWrapper;

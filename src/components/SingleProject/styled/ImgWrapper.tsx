import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 94vw;
  > * {
    transition: all 1s;
    &:hover {
      transform: scale(1.1);
    }
    border-radius: 8px;
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
  }
`;

export default ImgWrapper;

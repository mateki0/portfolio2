import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 100%;
  > * {
    border-radius: 8px;
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
  }
`;

export default ImgWrapper;

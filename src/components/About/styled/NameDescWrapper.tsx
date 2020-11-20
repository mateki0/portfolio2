import styled from 'styled-components';

const NameDescWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    text-align: right;
  }
`;
export default NameDescWrapper;

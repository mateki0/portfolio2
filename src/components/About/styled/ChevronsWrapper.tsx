import styled from 'styled-components';

const ChevronsWrapper = styled.div`
  display: none;
  visibility: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 50px;
  height: 50px;
  @media only screen and (min-width: 768px) {
    display: initial;
    visibility: visible;
  }
`;
export default ChevronsWrapper;

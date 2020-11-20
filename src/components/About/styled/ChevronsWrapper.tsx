import styled from 'styled-components';

const ChevronsWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 50px;
  height: 50px;
  transition: all 3s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  @media only screen and (min-width: 768px) {
    display: initial;
    visibility: visible;
  }
`;
export default ChevronsWrapper;

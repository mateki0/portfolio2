import styled from 'styled-components';

const DescriptionWrapper = styled.div<{ isVisible: boolean }>`
  display: block;
  width: 80%;

  border: none;
  background: transparent;
  transition: all 3s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  @media only screen and (min-width: 1280px) {
    grid-row: 2;
    grid-column: 2;
  }
`;

export default DescriptionWrapper;

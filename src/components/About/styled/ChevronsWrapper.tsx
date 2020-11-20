import styled from 'styled-components';

const ChevronsWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 150px;
  transition: all 3s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
`;
export default ChevronsWrapper;

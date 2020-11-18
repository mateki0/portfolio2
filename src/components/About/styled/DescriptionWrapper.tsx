import styled, { css } from 'styled-components';
import BouncedWord from './BouncedWord';

const DescriptionWrapper = styled.div<{ isVisible: boolean }>`
  width: 80%;
  height: 100%;
  text-align: center;
  border: none;
  background: transparent;
  position: absolute;
  top: 25vh;
  transform: translate3d(0, -1200px, 0);
  animation: ${(props) =>
    props.isVisible
      ? css`
          2s ${BouncedWord} 1
        `
      : 'initial'};
  animation-fill-mode: forwards;
`;

export default DescriptionWrapper;

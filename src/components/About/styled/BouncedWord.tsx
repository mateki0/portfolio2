import { keyframes } from 'styled-components';

export const BouncedWord = keyframes`
  8% {
            transform: translate3d(0, -120%, 0) scaleY(0.4);
            transform-origin: left bottom 0;
  }
  25% {
            transform: translate3d(0, -125%, 0) scaleY(1.4);
  }
  40% {
            transform: translate3d(0, 0, 0) scaleY(0.6);
            transform-origin: left bottom 0;
  }
  50% {
            transform: translate3d(0, 0, 0) scaleY(1.2);
            transform-origin: left bottom 0;
  }
  60% {
            transform: translate3d(0, 0, 0) scaleY(1);
            transform-origin: left bottom 0;
  }
  100% {
    opacity: 1;
            transform: translate3d(0, 0, 0);
  }
  
}
`;

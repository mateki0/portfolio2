import styled from 'styled-components';

const Chevron = styled.div`
  :first-of-type {
    ::after,
    ::before {
      animation-delay: 0s;
    }
  }
  :nth-of-type(2) {
    ::after,
    ::before {
      animation-delay: 0.2s;
    }
  }
  :nth-of-type(3) {
    ::after,
    ::before {
      animation-delay: 0.4s;
    }
  }
`;
export default Chevron;

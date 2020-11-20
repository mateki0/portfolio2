import styled from 'styled-components';

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #16224f;
  border-bottom: 2px solid rgb(24, 236, 141);
  margin-top: 70px;
  @media only screen and (min-width: 375px) {
    height: 800vh;
  }
  @media only screen and (min-width: 768px) {
    height: 50vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 60vh;
  }
  @media only screen and (min-width: 1280px) {
    height: 90vh;
  }
`;
export default AboutWrapper;

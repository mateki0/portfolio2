import styled from 'styled-components';

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 100vh;
  min-height: 650px;
  background: #16224f;
  border-bottom: 2px solid rgb(24, 236, 141);

  @media only screen and (min-width: 1024px) {
    height: 80vh;
  }
`;
export default AboutWrapper;

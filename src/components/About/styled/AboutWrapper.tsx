import styled from 'styled-components';

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 100vh;
  min-height: 650px;
  background: #444ef9;
  border-bottom: 2px solid #fe4902;

  @media only screen and (min-width: 1024px) {
    height: 80vh;
  }
`;
export default AboutWrapper;

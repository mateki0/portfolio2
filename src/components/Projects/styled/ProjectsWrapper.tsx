import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 50px 10px 0 10px;
  z-index: 3;
  overflow-x: hidden;
  overflow-y: hidden;
  @media only screen and (min-width: 1024px) {
    padding: 0 50px 0 50px;
  }
`;

export default ProjectsWrapper;

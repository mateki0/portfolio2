import styled from 'styled-components';
import ImgWrapper from './ImgWrapper';
import ProjectDescription from './ProjectDescription';
const ProjectContainer = styled.div<{ animate: boolean }>`
  width: 100%;
  margin-bottom: 100px;
  transition: all 1.5s ease-out;
  font-family: 'Goldman';
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  top: 10%;

  :nth-child(even) {
    right: ${(props) => (props.animate ? '0' : '-2000px')};
    ${ImgWrapper} {
      grid-column: 1;
    }
    ${ProjectDescription} {
      grid-column: 1;
    }
  }
  :nth-child(odd) {
    left: ${(props) => (props.animate ? '0' : '-2000px')};
    ${ImgWrapper} {
      grid-column: 1;
    }
    ${ProjectDescription} {
      grid-column: 1;
    }
  }
  @media only screen and (min-width: 1024px) {
    gap: 50px;
    grid-template-columns: 1fr 1fr;
    :nth-child(even) {
      ${ImgWrapper} {
        grid-column: 1;
      }
      ${ProjectDescription} {
        grid-column: 2;
      }
    }
    :nth-child(odd) {
      ${ImgWrapper} {
        grid-column: 2;
      }
      ${ProjectDescription} {
        grid-column: 1;
      }
    }
  }
`;

export default ProjectContainer;

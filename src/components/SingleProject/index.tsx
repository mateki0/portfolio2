import * as React from 'react';
import ProjectContainer from './styled/ProjectContainer';
import AppName from './styled/AppName';
import StyledLink from './styled/StyledLink';
import GatsbyImage from '../GatsbyImage';
import ProjectDescription from './styled/ProjectDescription';
import ImgWrapper from './styled/ImgWrapper';
import TechnoligesList from './styled/TechnologiesList';
import Technology from './styled/Technology';
import AppDescription from './styled/AppDescription';
interface ProjectProps {
  imageSrc: string;
  name: string;
  imgHref: string;
  forwardRef: any;
  animate: boolean;
  description: string;
  technologies: string;
}

const SingleProject = ({
  name,
  imgHref,
  imageSrc,
  forwardRef,
  animate,
  description,
  technologies,
}: ProjectProps) => {
  const descriptionArray = technologies.split(' ');
  return (
    <ProjectContainer ref={forwardRef} animate={animate}>
      <ImgWrapper>
        <GatsbyImage filename={imageSrc} />
      </ImgWrapper>
      <ProjectDescription>
        <AppName>{name}</AppName>
        <AppDescription>{description}</AppDescription>
        <TechnoligesList>
          {descriptionArray.map((item) => (
            <Technology key={item}>{item.replace('-', ' ')}</Technology>
          ))}
        </TechnoligesList>
        <StyledLink href={imgHref} target="_blank">
          Zobacz
        </StyledLink>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default SingleProject;

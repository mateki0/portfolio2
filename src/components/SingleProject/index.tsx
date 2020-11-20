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
import Github from '../../assets/github.svg';
import Cooperation from './styled/Cooperation';
interface ProjectProps {
  imageSrc: string;
  name: string;
  imgHref: string;
  forwardRef: any;
  animate: boolean;
  description: string;
  technologies: string;
  github: string;
}

const SingleProject = ({
  name,
  imgHref,
  imageSrc,
  forwardRef,
  animate,
  description,
  technologies,
  github,
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
          {name === 'Carsify' ? <Cooperation>* Współpraca</Cooperation> : ''}
          {descriptionArray.map((item) => (
            <Technology key={item}>{item.replace('-', ' ')}</Technology>
          ))}
          <Technology>
            {github === 'private' ? (
              <span>Prywatne repozytorium</span>
            ) : (
              <a target="_blank" href={github}>
                <Github />
              </a>
            )}
          </Technology>
        </TechnoligesList>
        <StyledLink href={imgHref} target="_blank">
          Zobacz
        </StyledLink>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default SingleProject;

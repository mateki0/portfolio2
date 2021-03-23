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
import PrivateGithub from './styled/PrivateGithub';

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
        <GatsbyImage filename={imageSrc} alt={name} />
      </ImgWrapper>
      <ProjectDescription>
        <AppName>{name}</AppName>
        <AppDescription>{description}</AppDescription>
        <TechnoligesList>
          {name === 'Carsify' ? (
            <Technology>
              <h3>* Współpraca</h3>
            </Technology>
          ) : (
            ''
          )}
          {descriptionArray.map((item) => (
            <Technology key={item}>{item.replace('-', ' ')}</Technology>
          ))}
          <Technology>
            {github === 'private' ? (
              <PrivateGithub>
                <Github />
                <span>Prywatne repozytorium</span>
              </PrivateGithub>
            ) : (
              <a target="_blank" href={github} rel="noopener noreferrer">
                <Github />
              </a>
            )}
          </Technology>
        </TechnoligesList>
        {imgHref !== 'mobile' && (
          <StyledLink href={imgHref} target="_blank" rel="noopener noreferrer">
            Zobacz
          </StyledLink>
        )}
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default SingleProject;

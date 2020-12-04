import * as React from 'react';
import SingleProject from '../SingleProject';
import ProjectsWrapper from './styled/ProjectsWrapper';
import { useStaticQuery, graphql } from 'gatsby';
import SectionName from './styled/SectionName';

const Projects = ({ forwardRef }) => {
  const allFile = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              imgName
              imgHref
              image
              description
              technologies
              github
            }
          }
        }
      }
    }
  `);

  allFile.allMarkdownRemark.edges.sort((a, b) => {
    return a.node.frontmatter.image.slice(8, 9) - b.node.frontmatter.image.slice(8, 9);
  });

  const refArray = [
    {
      name: 'modern',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'restaurant',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'carsify',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'bet',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'hacker',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'gallery',
      ref: React.useRef<HTMLDivElement>(null),
    },
    {
      name: 'pokebase',
      ref: React.useRef<HTMLDivElement>(null),
    },
  ];

  const [show, doShow] = React.useState({
    project0: false,
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
  });
  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= refArray[0].ref.current.getBoundingClientRect().top - 600) {
        doShow((state) => ({ ...state, project0: true }));
      }
      if (
        window.scrollY >=
        refArray[0].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project1: true }));
      }
      if (
        window.scrollY >=
        refArray[1].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project2: true }));
      }
      if (
        window.scrollY >=
        refArray[2].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project3: true }));
      }
      if (
        window.scrollY >=
        refArray[3].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project4: true }));
      }
      if (
        window.scrollY >=
        refArray[4].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project5: true }));
      }
      if (
        window.scrollY >=
        refArray[5].ref.current.getBoundingClientRect().top + window.pageYOffset
      ) {
        doShow((state) => ({ ...state, project6: true }));
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <ProjectsWrapper ref={forwardRef}>
      <SectionName>Projekty</SectionName>
      {allFile.allMarkdownRemark.edges.map((image, id) => (
        <SingleProject
          animate={show[`project${id}`]}
          forwardRef={refArray[id].ref}
          key={id}
          imageSrc={image.node.frontmatter.image}
          name={image.node.frontmatter.imgName}
          imgHref={image.node.frontmatter.imgHref}
          description={image.node.frontmatter.description}
          technologies={image.node.frontmatter.technologies}
          github={image.node.frontmatter.github}
        />
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;

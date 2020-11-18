import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GatsbyImage = ({ filename }: { filename: string }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const file = filename.slice(8);

  const image = allFile.edges.find((n) => {
    return n.node.relativePath.includes(file);
  });

  if (!image) {
    return null;
  }
  return <Img fluid={image.node.childImageSharp.fluid} />;
};

export default GatsbyImage;

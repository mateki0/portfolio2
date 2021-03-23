import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const CustomGatsbyImage = ({ filename, alt }: { filename: string; alt: string }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 1000)
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
  return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={alt} />;
};

export default CustomGatsbyImage;

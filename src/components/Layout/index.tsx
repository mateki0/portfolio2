import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import StyledMain from './StyledMain';
import StyledBackground from './StyledBackground';

interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
}
const GlobalStyle = createGlobalStyle`

body{
  
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  @media only screen and (min-width: 1024px) {
  }
}

`;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const hero = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "bg3.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        {children}
        {/* <StyledBackground fluid={hero.file.childImageSharp.fluid}></StyledBackground> */}
      </StyledMain>
    </>
  );
};
export default Layout;

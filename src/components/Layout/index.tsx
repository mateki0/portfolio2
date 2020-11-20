import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import StyledMain from './StyledMain';

interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
}
const GlobalStyle = createGlobalStyle`

body{
  background-color:rgb(28, 49, 69);
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  @media only screen and (min-width: 1024px) {
  }
}

`;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>{children}</StyledMain>
    </>
  );
};
export default Layout;

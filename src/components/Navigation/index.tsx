import * as React from 'react';
import Menu from './styled/Menu';
import StyledHeader from './styled/StyledHeader';
import NavList from './styled/NavList';
import NavButton from './styled/NavButton';

const Navigation = ({ projectsRef, contactRef }) => {
  const handleScrollToAbout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <StyledHeader>
      <Menu>
        <NavList>
          <li>
            <NavButton onClick={handleScrollToAbout}>O mnie</NavButton>
          </li>
          <li>
            <NavButton onClick={handleScrollToProjects}>Projekty</NavButton>
          </li>
          <li>
            <NavButton onClick={handleScrollToContact}>Kontakt</NavButton>
          </li>
        </NavList>
      </Menu>
    </StyledHeader>
  );
};
export default Navigation;

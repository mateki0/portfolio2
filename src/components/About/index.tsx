import * as React from 'react';
import AboutWrapper from './styled/AboutWrapper';
import Typing from 'react-typing-animation';
import Heading from './styled/Heading';
import DescriptionWrapper from './styled/DescriptionWrapper';
import ChevronDown from './styled/ChevronDown';
import Chevron from './styled/Chevron';
import StyledSpan from './styled/StyledSpan';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import IconsWrapper from './styled/IconsWrapper';
import ChevronsWrapper from './styled/ChevronsWrapper';
const About = ({ forwardRef }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleDescription = () => {
    setIsVisible(true);
  };
  const handleScrollClick = () => {
    window.scrollTo({
      top: 550,
      behavior: 'smooth',
    });
  };

  return (
    <AboutWrapper ref={forwardRef}>
      <Typing speed={70} onFinishedTyping={toggleDescription}>
        <Heading isVisible={isVisible}>Cześć, jestem Mateusz</Heading>
      </Typing>
      <DescriptionWrapper isVisible={isVisible}>
        <StyledSpan>
          Moją pasją jest programowanie, dlatego poszukuję swojej pierwszej pracy jako Frontend
          Developer, aby móc się dalej rozwijać. Uczę się samodzielnie. Mam już na koncie jeden
          projekt komercyjny (ModernSimple). Chciałbym pokazać Ci kilka moich projektów, oraz
          zachęcić do kontaktu.
        </StyledSpan>
        <IconsWrapper>
          <a href="https://github.com/mateki0" target="_blank">
            <Github />
          </a>
          <a href="https://linkedin.com/in/mateusz-bętka" target="_blank">
            <Linkedin />
          </a>
        </IconsWrapper>
      </DescriptionWrapper>
      <ChevronsWrapper>
        <ChevronDown isVisible={isVisible} onClick={handleScrollClick}>
          <Chevron />
          <Chevron />
          <Chevron />
        </ChevronDown>
      </ChevronsWrapper>
    </AboutWrapper>
  );
};

export default About;

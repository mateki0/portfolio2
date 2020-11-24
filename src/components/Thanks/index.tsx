import * as React from 'react';
import Heading from '../About/styled/Heading';
import StyledLink from '../SingleProject/styled/StyledLink';
import BackToHome from './styled/BackToHome';
import ThanksWrapper from './styled/ThanksWrapper';

const Thanks = () => {
  return (
    <ThanksWrapper>
      <Heading>Dziękuje za wysłanie formularza</Heading>
      <BackToHome to="/">Wróć na stronę główną</BackToHome>
    </ThanksWrapper>
  );
};

export default Thanks;

import * as React from 'react';
import Heading from '../About/styled/Heading';
import BackToHome from '../Thanks/styled/BackToHome';
import ThanksWrapper from '../Thanks/styled/ThanksWrapper';

const Custom404 = () => {
  return (
    <ThanksWrapper>
      <Heading>Podana strona nie istnieje</Heading>
      <BackToHome to="/">Wróć na stronę główną</BackToHome>
    </ThanksWrapper>
  );
};

export default Custom404;

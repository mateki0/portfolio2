import * as React from 'react';
import ContactWrapper from './styled/ContactWrapper';
import Form from './styled/Form';
import Input from './styled/Input';
import InputWrapper from './styled/InputWrapper';
import Label from './styled/Label';
import SubmitButton from './styled/SubmitButton';
import Textarea from './styled/Textarea';

const Contact = () => {
  return (
    <ContactWrapper>
      <Form>
        <InputWrapper>
          <Label htmlFor="name">Imię</Label>
          <Input type="text" name="name" id="name" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">Wiadomość</Label>
          <Textarea name="message" id="message" />
        </InputWrapper>
        <SubmitButton type="submit">Wyślij</SubmitButton>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;

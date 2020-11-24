import * as React from 'react';
import ContactWrapper from './styled/ContactWrapper';
import Form from './styled/Form';
import Input from './styled/Input';
import InputWrapper from './styled/InputWrapper';
import Label from './styled/Label';
import SubmitButton from './styled/SubmitButton';
import Textarea from './styled/Textarea';
import { useForm } from 'react-hook-form';
import ErrorSpan from './styled/ErrorSpan';
import SectionName from '../Projects/styled/SectionName';

type Inputs = {
  name: string;
  email: string;
  message: string;
};
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const Contact = ({ forwardRef }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [state, setState] = React.useState({});
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...state,
      }),
    })
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContactWrapper ref={forwardRef}>
      <SectionName>Kontakt</SectionName>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <InputWrapper>
          <div>
            <Label htmlFor="name">Imię</Label>
            <ErrorSpan>{errors.name ? 'Jest za krótkie (min. 3 znaki)' : ''}</ErrorSpan>
          </div>
          <Input
            type="text"
            name="name"
            id="name"
            ref={register({ required: true, minLength: 3 })}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <div>
            <Label htmlFor="email">Email</Label>
            <ErrorSpan>{errors.email ? errors.email.message : ''}</ErrorSpan>
          </div>
          <Input
            type="email"
            name="email"
            id="email"
            ref={register({
              required: 'jest nieprawidłowy',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'jest nieprawidłowy',
              },
            })}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <div>
            <Label htmlFor="message">Wiadomość</Label>
            <ErrorSpan>{errors.message ? 'Jest za krótka (min. 10 znaków)' : ''}</ErrorSpan>
          </div>
          <Textarea
            name="message"
            id="message"
            ref={register({ required: true, minLength: 10 })}
            onChange={handleChange}
          />
        </InputWrapper>
        <input type="hidden" name="form-name" value="contact" />
        <SubmitButton>Wyślij</SubmitButton>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;

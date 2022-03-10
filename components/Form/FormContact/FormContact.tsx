import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Form, Input, TextArea, Button, Select, Message } from 'semantic-ui-react'
import MessageSubmit from '@components/Message/MessageSubmit';

function FormContact() {

  const [result, setResult] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_82naxwm', 'template_2cjqgsf', e.target, 'NUvoAyzA4Wx_2vGfo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setResult(true);
  };

  return (
    <Form onSubmit={sendEmail} success>
      <Form.Group widths='equal' onClick={() => setResult(false)}>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
          name='first_name'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
          name='last_name'
        />
        <Form.Field
          id='form-input-control-phone'
          control={Input}
          label='Phone'
          placeholder='(xxx)'
          name='phone'
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Message'
        placeholder='Message'
        name='message'
      />
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='loe@schmoe.com'
        name='email'
      // error={{
      //   content: 'Please enter a valid email address',
      //   pointing: 'below',
      // }}
      />
      <Form.Button content='Submit' />
      {result ? <MessageSubmit /> : null}
    </Form>
  )
}

export default FormContact
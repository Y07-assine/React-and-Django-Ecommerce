import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'


const Login = () => (
  <Form>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Password'
      error={{
        content: 'Please enter a valid password',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
)

export default Login

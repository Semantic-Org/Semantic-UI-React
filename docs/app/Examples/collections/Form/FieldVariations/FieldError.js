import React, {Component} from 'react';
import {Field, Form, Input} from 'stardust';

export default class FieldErrorExample extends Component {
  render() {
    return (
      <Form>
        <Field label='First name' className='error'>
          <Input placeholder='First name' />
        </Field>
      </Form>
    );
  }
}

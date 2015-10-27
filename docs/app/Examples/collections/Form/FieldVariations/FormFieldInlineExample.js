import React, {Component} from 'react';
import {Field, Form, Input} from 'stardust';

export default class FormFieldInlineExample extends Component {
  render() {
    return (
      <Form>
        <Field label='First name' className='inline'>
          <Input placeholder='First name' />
        </Field>
      </Form>
    );
  }
}

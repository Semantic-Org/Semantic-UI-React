import React, {Component} from 'react';
import {Field, Fields, Form, Input} from 'stardust';

export default class FormGroupEvenlyDividedExample extends Component {
  render() {
    return (
      <Form>
        <Fields evenlyDivided>
          <Field label='First name' className='inline'>
            <Input placeholder='First name' />
          </Field>
        </Fields>
      </Form>
    );
  }
}

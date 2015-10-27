import React, {Component} from 'react';
import {Field, Fields, Form, Input} from 'stardust';

export default class FormGroupEvenlyDividedExample extends Component {
  render() {
    return (
      <Form>
        <Fields evenlyDivided>
          <Field label='First name'>
            <Input placeholder='First name' />
          </Field>
          <Field label='Last name'>
            <Input placeholder='Last name' />
          </Field>
        </Fields>
      </Form>
    );
  }
}

import React, {Component} from 'react';
import {Field, Form, Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Form>
        <Field label='First name'>
          <Input placeholder='First name' />
        </Field>
      </Form>
    );
  }
}

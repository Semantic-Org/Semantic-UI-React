import React, {Component} from 'react';
import {Field, Form, Input} from 'stardust';

export default class FieldExample extends Component {
  render() {
    return (
      <Form>
        <Field label='User Input'>
          <Input placeholder='User Input' />
        </Field>
      </Form>
    );
  }
}

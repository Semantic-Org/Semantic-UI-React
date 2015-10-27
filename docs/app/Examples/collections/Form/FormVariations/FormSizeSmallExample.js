import React, {Component} from 'react';
import {Button, Field, Fields, Form, Input} from 'stardust';

export default class FormSizeSmallExample extends Component {
  render() {
    return (
      <Form className='small'>
        <Fields>
          <Field label='First name'>
            <Input placeholder='First name' />
          </Field>
          <Field label='Last name'>
            <Input placeholder='Last name' />
          </Field>
        </Fields>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

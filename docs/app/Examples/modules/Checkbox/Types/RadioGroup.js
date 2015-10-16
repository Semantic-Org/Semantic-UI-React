import React, {Component} from 'react';
import {Form, Field, Checkbox} from 'stardust';

export default class RadioGroupExample extends Component {
  render() {
    return (
      <Form>
        <Field>
          <Checkbox className='radio' label='Choose this' name='radioGroup' />
        </Field>
        <Field>
          <Checkbox className='radio' label='Or that' name='radioGroup' />
        </Field>
      </Form>
    );
  }
}

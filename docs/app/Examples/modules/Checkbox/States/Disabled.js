import React, {Component} from 'react';
import {Form, Checkbox, Field} from 'stardust';

export default class CheckboxDisabledExample extends Component {
  render() {
    return (
      <Form>
        <Field>
          <Checkbox className='disabled' label='Disabled' />
        </Field>
        <Field>
          <Checkbox className='toggle' disabled={true} label='Disabled' />
        </Field>
      </Form>
    );
  }
}

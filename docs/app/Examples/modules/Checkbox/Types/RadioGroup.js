import React, {Component} from 'react';
import {Form, Field, Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Form>
          <Field>
            <Checkbox className='radio' label='Choose this' name='radioGroup' />
          </Field>
          <Field>
            <Checkbox className='radio' label='Or that' name='radioGroup' />
          </Field>
        </Form>
      </div>
    );
  }
}

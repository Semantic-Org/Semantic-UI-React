import React, {Component} from 'react';
import {Form, Field, Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Form>
        <Field label='Basic'>
          <Checkbox />
        </Field>
        <Field label='Slider'>
          <Checkbox className='slider' />
        </Field>
        <Field label='Toggle'>
          <Checkbox className='toggle' />
        </Field>
      </Form>
    );
  }
}

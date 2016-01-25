import React, {Component} from 'react';
import {Button, Checkbox, Field, Fields, Form, Input, Message} from 'stardust';

export default class FormValidatingOnBlurAndOtherEventsExample extends Component {
  formSettings = {
    inline: true,
    on: 'blur',
    fields: {
      'first-name': {
        identifier: 'first-name',
        rules: [
          {type: 'empty'}
        ],
      },
      'last-name': {
        identifier: 'last-name',
        rules: [
          {type: 'empty'}
        ],
      },
      'username': {
        identifier: 'username',
        rules: [
          {type: 'empty'}
        ],
      },
      'password': {
        identifier: 'password',
        rules: [
          {type: 'empty'},
          {type: 'minLength[6]'},
        ],
      },
      'terms': {
        identifier: 'terms',
        rules: [
          {type: 'checked'}
        ],
      },
    }
  }

  render() {
    return (
      <Form settings={this.formSettings} className='segment'>
        <p>Let's go ahead and get you signed up.</p>
        <Fields evenlyDivided>
          <Field>
            <label>First Name</label>
            <Input placeholder='First Name' name='first-name' type='text' />
          </Field>
          <Field>
            <label>Last Name</label>
            <Input placeholder='Last Name' name='last-name' type='text' />
          </Field>
        </Fields>
        <Fields evenlyDivided>
          <Field label='Username'>
            <Input placeholder='Username' name='username' type='text' />
          </Field>
          <Field label='Password'>
            <Input type='password' name='password' />
          </Field>
        </Fields>
        <Field className='inline'>
          <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
        </Field>
        <Button className='blue submit'>Submit</Button>
        <Message className='error' />
      </Form>
    );
  }
}

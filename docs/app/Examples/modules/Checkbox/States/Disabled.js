import React, {Component} from 'react';
import {Form, Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Form>
          <Checkbox className='disabled' label='Disabled' />
        </Form>
        <Form>
          <Checkbox className='toggle' disabled={true} label='Disabled' />
        </Form>
      </div>
    );
  }
}

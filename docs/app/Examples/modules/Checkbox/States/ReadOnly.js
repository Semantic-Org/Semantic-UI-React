import React, {Component} from 'react';
import {Form, Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Form>
        <Checkbox className='read-only' label='This checkbox is read-only' />
      </Form>
    );
  }
}

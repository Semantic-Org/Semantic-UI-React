import React, {Component} from 'react';
import {Form, Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Form>
        <Checkbox className='checked' checked={true} label='This checkbox comes prechecked' />
      </Form>
    );
  }
}

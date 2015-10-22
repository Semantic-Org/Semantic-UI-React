import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageWarningExample extends Component {
  render() {
    return (
      <Message className='warning' header='You must register before you can do that!'>
        Visit our registration page, then try again.
      </Message>
    );
  }
}

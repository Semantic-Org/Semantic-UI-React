import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageDismissableBlockExample extends Component {
  render() {
    return (
      <Message dismissable header='Welcome back!'>
        This is a special notification which you can dismiss.
      </Message>
    );
  }
}

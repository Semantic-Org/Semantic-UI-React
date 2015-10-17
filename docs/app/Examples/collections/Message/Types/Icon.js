import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageDismissableExample extends Component {
  render() {
    return (
      <Message dismissable>
        You can dismiss this message by clicking the "x".
      </Message>
    );
  }
}

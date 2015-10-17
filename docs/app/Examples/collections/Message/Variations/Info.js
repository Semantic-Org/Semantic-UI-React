import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageInfoExample extends Component {
  render() {
    return (
      <Message className='info' heading='Was this what you wanted?'>
        Did you know it's been a while?
      </Message>
    );
  }
}

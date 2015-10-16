import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageInfoExample extends Component {
  render() {
    return (
      <Message heading='Was this what you wanted?'>
        <ul className='list'>
          <li>It's good to see you again.</li>
          <li>Did you know it's been a while?</li>
        </ul>
      </Message>
    );
  }
}

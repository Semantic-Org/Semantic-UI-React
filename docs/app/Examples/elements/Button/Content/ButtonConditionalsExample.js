import React, {Component} from 'react';
import {Buttons, Button} from 'stardust';

export default class ButtonButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button>Cancel</Button>
        <div className='or' />
        <Button className='positive'>Save</Button>
      </Buttons>
    );
  }
}

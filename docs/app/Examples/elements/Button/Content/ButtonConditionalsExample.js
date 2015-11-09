import React, {Component} from 'react';
import {Buttons, Button} from 'stardust';

export default class ButtonConditionalsExample extends Component {
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

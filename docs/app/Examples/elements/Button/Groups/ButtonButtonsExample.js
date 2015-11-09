import React, {Component} from 'react';
import {Buttons, Button} from 'stardust';

export default class ButtonButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Buttons>
    );
  }
}

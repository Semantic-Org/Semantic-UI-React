import React, {Component} from 'react';
import {Buttons, Button} from 'stardust';

export default class ButtonButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button class='primary'>One</Button>
        <Button class='primary'>Two</Button>
        <Button class='primary'>Three</Button>
      </Buttons>
    );
  }
}

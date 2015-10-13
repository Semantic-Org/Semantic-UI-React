import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class extends Component {
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Checkbox onClick={this.handleClick} />
    );
  }
}

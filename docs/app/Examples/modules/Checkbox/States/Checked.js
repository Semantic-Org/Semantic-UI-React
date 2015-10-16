import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class CheckboxCheckedExample extends Component {
  state = {isChecked: true};

  handleChange = (e) => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return (
      <Checkbox label='This checkbox comes prechecked' checked={this.state.isChecked} onChange={this.handleChange} />
    );
  }
}

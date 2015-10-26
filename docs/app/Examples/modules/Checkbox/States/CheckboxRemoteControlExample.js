import React, {Component} from 'react';
import {Button, Checkbox} from 'stardust';

export default class CheckboxRemoteControlExample extends Component {
  state = {checked: false};

  toggle = () => {
    this.refs.checkbox.plugin('toggle');
  };

  handleChange = () => {
    this.setState({
      checked: this.refs.checkbox.plugin('is checked')
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it</Button>
        <Checkbox label='Check this box' onChange={this.handleChange} ref='checkbox' />
        <p>It is {!this.state.checked && 'not '}checked.</p>
      </div>
    );
  }
}

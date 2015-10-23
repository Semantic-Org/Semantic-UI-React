import React, {Component} from 'react';
import {Button, Checkbox} from 'stardust';

export default class CheckboxCheckboxExample extends Component {
  toggle = () => {
    this.refs.checkbox.plugin('toggle');
  };

  handleChange(e) {
    console.log('it change');
    console.log(e);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it!</Button>
        <Checkbox label='Make my profile visible' ref='checkbox' onChange={this.handleChange}/>
      </div>
    );
  }
}

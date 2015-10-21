import React, {Component} from 'react';
import {Button, Dropdown, Input} from 'stardust';

export default class InputActionExample extends Component {
  render() {
    const options = [
      {value: 'articles', text: 'Articles'},
      {value: 'products', text: 'Products'},
    ];
    return (
      <Input className='left icon action' icon='search' placeholder='Search...'>
        <Dropdown className='compact selection' options={options} />
        <Button type='submit'>Search</Button>
      </Input>
    );
  }
}

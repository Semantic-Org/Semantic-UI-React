import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Button className='mini'>
          Mini
        </Button>
        <Button className='tiny'>
          Tiny
        </Button>
        <Button className='small'>
          Small
        </Button>
        <Button className='medium'>
          Medium
        </Button>
        <Button className='large'>
          Large
        </Button>
        <Button className='big'>
          Big
        </Button>
        <Button className='huge'>
          Huge
        </Button>
        <Button className='massive'>
          Massive
        </Button>
      </div>
    );
  }
}

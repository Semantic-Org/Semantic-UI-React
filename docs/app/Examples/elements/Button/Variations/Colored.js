import React, {Component} from 'react';
import {Button} from 'stardust';

export default class ButtonColoredExample extends Component {
  render() {
    return (
      <div>
        <Button className='red'>Red</Button>
        <Button className='orange'>Orange</Button>
        <Button className='yellow'>Yellow</Button>
        <Button className='olive'>Olive</Button>
        <Button className='green'>Green</Button>
        <Button className='teal'>Teal</Button>
        <Button className='blue'>Blue</Button>
        <Button className='violet'>Violet</Button>
        <Button className='purple'>Purple</Button>
        <Button className='pink'>Pink</Button>
        <Button className='brown'>Brown</Button>
        <Button className='grey'>Grey</Button>
        <Button className='black'>Black</Button>
      </div>
    );
  }
}

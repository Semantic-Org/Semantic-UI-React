import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <div className='ui inverted segment'>
          <Button className='inverted'>Standard</Button>
          <Button className='inverted red'>Red</Button>
          <Button className='inverted orange'>Orange</Button>
          <Button className='inverted yellow'>Yellow</Button>
          <Button className='inverted olive'>Olive</Button>
          <Button className='inverted green'>Green</Button>
          <Button className='inverted teal'>Teal</Button>
          <Button className='inverted blue'>Blue</Button>
          <Button className='inverted violet'>Violet</Button>
          <Button className='inverted purple'>Purple</Button>
          <Button className='inverted pink'>Pink</Button>
          <Button className='inverted brown'>Brown</Button>
          <Button className='inverted grey'>Grey</Button>
          <Button className='inverted black'>Black</Button>
        </div>
        <div className='ui inverted segment'>
          <Button className='inverted basic'>Standard</Button>
          <Button className='inverted red basic'>Red</Button>
          <Button className='inverted orange basic'>Orange</Button>
          <Button className='inverted yellow basic'>Yellow</Button>
          <Button className='inverted olive basic'>Olive</Button>
          <Button className='inverted green basic'>Green</Button>
          <Button className='inverted teal basic'>Teal</Button>
          <Button className='inverted blue basic'>Blue</Button>
          <Button className='inverted violet basic'>Violet</Button>
          <Button className='inverted purple basic'>Purple</Button>
          <Button className='inverted pink basic'>Pink</Button>
          <Button className='inverted brown basic'>Brown</Button>
          <Button className='inverted grey basic'>Grey</Button>
          <Button className='inverted black basic'>Black</Button>
        </div>
      </div>
    );
  }
}

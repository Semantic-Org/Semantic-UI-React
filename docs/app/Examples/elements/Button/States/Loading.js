import React, {Component} from 'react';
import {Button} from 'stardust';

export default class LoadingExample extends Component {
  render() {
    return (
      <div>
        <Button className='loading' />
        <Button className='basic loading' />
        <Button className='primary loading' />
        <Button className='secondary loading' />
      </div>
    );
  }
}

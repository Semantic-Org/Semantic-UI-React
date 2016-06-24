import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonLoadingExample extends Component {
  render() {
    return (
      <div>
        <Button loading />
        <Button basic loading />
        <Button loading className='primary' />
        <Button loading className='secondary' />
      </div>
    )
  }
}

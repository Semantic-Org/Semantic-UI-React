import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonCircularExample extends Component {
  render() {
    return (
      <div>
        <Button circular icon='settings' />
        <div>
          <Button circular icon='facebook' />
          <Button circular icon='twitter' />
          <Button circular icon='linkedin' />
          <Button circular icon='google' />
        </div>
      </div>
    )
  }
}

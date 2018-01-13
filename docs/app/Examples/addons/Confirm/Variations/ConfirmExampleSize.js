import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

export default class ConfirmExampleSize extends Component {
  state = { open: false }

  handleButtonClick = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.handleButtonClick}>Show Large</Button>
        <Confirm
          header='This is a large confirm'
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size='large'
        />
      </div>
    )
  }
}

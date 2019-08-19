import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmExampleCallbacks extends Component {
  state = { open: false, result: 'show the modal to capture a result' }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  render() {
    const { open, result } = this.state

    return (
      <div>
        <p>
          Result: <em>{result}</em>
        </p>

        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmExampleCallbacks

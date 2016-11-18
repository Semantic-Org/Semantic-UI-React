import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmExampleCallbacks extends Component {
  state = { result: 'show the modal to capture a result' }

  handleConfirm = () => this.setState({ result: 'confirmed' })
  handleCancel = () => this.setState({ result: 'cancelled' })

  render() {
    const { result } = this.state

    return (
      <div>
        <p>Result: <em>{result}</em></p>

        <Confirm
          trigger={<Button>Show</Button>}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmExampleCallbacks

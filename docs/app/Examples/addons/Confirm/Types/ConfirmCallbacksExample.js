import React, { Component } from 'react'
import { Button, Confirm } from 'stardust'

class ConfirmCallbacksExample extends Component {
  state = { active: false, result: 'show the modal to capture a result' }

  show = () => this.setState({ active: true })
  handleConfirm = () => this.setState({ result: 'confirmed', active: false })
  handleCancel = () => this.setState({ result: 'cancelled', active: false })

  render() {
    const { active, result } = this.state

    return (
      <div>
        <p>Result: <em>{result}</em></p>

        <Button onClick={this.show}>Show</Button>
        <Confirm
          active={active}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmCallbacksExample

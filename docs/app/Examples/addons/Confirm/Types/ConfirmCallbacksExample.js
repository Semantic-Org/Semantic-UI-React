import React, { Component } from 'react'
import { Button, Confirm } from 'stardust'

class ConfirmConfirmExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  handleConfirm = () => this.setState({ result: 'confirm', active: false })
  handleCancel = () => this.setState({ result: 'cancel', active: false })

  render() {
    const { active, result } = this.state

    return (
      <div>
        {result && <p>You chose: <em>{result}</em></p>}

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

export default ConfirmConfirmExample

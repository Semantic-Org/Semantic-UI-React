import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmExampleConfirm extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.open}>Show</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </div>
    )
  }
}

export default ConfirmExampleConfirm

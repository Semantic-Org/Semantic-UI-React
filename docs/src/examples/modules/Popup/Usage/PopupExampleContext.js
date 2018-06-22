import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContext extends React.Component {
  state = {}

  toggle = () => this.setState({ open: !this.state.open })

  handleRef = node => this.setState({ node })

  render() {
    const { node, open } = this.state
    return (
      <div>
        <Button content='Attach Popup' onClick={this.toggle} />
        <Popup context={node} content='Hello' position='top center' open={open} />
        ---------->
        <strong ref={this.handleRef}>here</strong>
      </div>
    )
  }
}

export default PopupExampleContext

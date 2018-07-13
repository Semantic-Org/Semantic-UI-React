import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContextControlled extends React.Component {
  state = {}

  handleRef = node => this.setState({ node })

  render() {
    const { node } = this.state
    const trigger = <Button content='Trigger Popup' />

    return (
      <div>
        <Popup trigger={trigger} context={node} content='Hello' position='top center' />
        ---------->
        <strong ref={this.handleRef}>here</strong>
      </div>
    )
  }
}

export default PopupExampleContextControlled

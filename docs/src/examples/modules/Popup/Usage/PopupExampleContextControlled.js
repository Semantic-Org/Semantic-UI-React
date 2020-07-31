import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContextControlled extends React.Component {
  state = {}
  contextRef = React.createRef()

  toggle = () => this.setState((prevState) => ({ open: !prevState.open }))

  render() {
    return (
      <>
        <Button content='Open controlled Popup' onClick={this.toggle} />
        <Popup
          context={this.contextRef}
          content='Hello'
          position='top center'
          open={this.state.open}
        />
        ---------->
        <strong ref={this.contextRef}>here</strong>
      </>
    )
  }
}

export default PopupExampleContextControlled

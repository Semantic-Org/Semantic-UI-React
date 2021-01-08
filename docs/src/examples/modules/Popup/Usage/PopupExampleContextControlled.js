import React, { createRef, Fragment } from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContextControlled extends React.Component {
  state = {}
  contextRef = createRef()

  toggle = () => this.setState((prevState) => ({ open: !prevState.open }))

  render() {
    return (
      <Fragment>
        <Button content='Open controlled Popup' onClick={this.toggle} />
        <Popup
          context={this.contextRef}
          content='Hello'
          position='top center'
          open={this.state.open}
        />
        ---------->
        <strong ref={this.contextRef}>here</strong>
      </Fragment>
    )
  }
}

export default PopupExampleContextControlled

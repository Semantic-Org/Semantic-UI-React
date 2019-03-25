import React, { createRef } from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContextControlled extends React.Component {
  contextRef = createRef()

  render() {
    return (
      <React.Fragment>
        <Popup
          trigger={<Button content='Trigger Popup' />}
          context={this.contextRef}
          content='Hello'
          position='top center'
        />
        ---------->
        <strong ref={this.contextRef}>here</strong>
      </React.Fragment>
    )
  }
}

export default PopupExampleContextControlled

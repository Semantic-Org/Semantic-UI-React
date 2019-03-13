import React, { createRef } from 'react'
import { Button, Popup } from 'semantic-ui-react'

class PopupExampleContextControlled extends React.Component {
  contextRef = createRef()

  render() {
    return (
      <div>
        <Popup
          trigger={<Button content='Trigger Popup' />}
          context={this.contextRef}
          content='Hello'
          position='top center'
        />
        ---------->
        <strong ref={this.contextRef}>here</strong>
      </div>
    )
  }
}

export default PopupExampleContextControlled

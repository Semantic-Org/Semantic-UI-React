import React from 'react'
import { Button, Grid, Popup } from 'semantic-ui-react'

class PopupExampleContext extends React.Component {
  state = { attachPopup: false }

  onClick = () => {
    this.setState({ attachPopup: !this.state.attachPopup })
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Button className='existingElement' content='Attach Popup' onClick={this.onClick} />
          {this.state.attachPopup ? (
            <Popup
              context={document.querySelector('.existingElement')}
              content={'Bound to existing element.'}
              position='top right'
              open
            />
          ) : null}
        </Grid.Column>
      </Grid>
    )
  }
}

export default PopupExampleContext

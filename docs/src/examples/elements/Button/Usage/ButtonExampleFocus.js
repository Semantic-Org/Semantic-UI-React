import React, { Component, createRef } from 'react'
import { Button, Grid } from 'semantic-ui-react'

export default class ButtonExampleFocus extends Component {
  buttonRef = createRef()
  handleClick = () => this.buttonRef.current.focus()

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Button
            content='A button that can be focused'
            primary
            ref={this.buttonRef}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Button content='Set focused' onClick={this.handleClick} />
        </Grid.Column>
      </Grid>
    )
  }
}

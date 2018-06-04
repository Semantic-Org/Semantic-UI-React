import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

export default class ButtonExampleFocus extends Component {
  handleClick = () => this.ref.focus()

  handleRef = c => (this.ref = c)

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Button
            content='A button that can be focused'
            primary
            ref={this.handleRef}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Button
            content='Set focused'
            onClick={this.handleClick}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

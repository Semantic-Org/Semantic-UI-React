import React, { Component, createRef } from 'react'
import { GridColumn, Button, Grid } from 'semantic-ui-react'

export default class ButtonExampleFocus extends Component {
  buttonRef = createRef()
  handleClick = () => this.buttonRef.current.focus()

  render() {
    return (
      <Grid>
        <GridColumn width={8}>
          <Button
            content='A button that can be focused'
            primary
            ref={this.buttonRef}
          />
        </GridColumn>
        <GridColumn width={8}>
          <Button content='Set focused' onClick={this.handleClick} />
        </GridColumn>
      </Grid>
    )
  }
}

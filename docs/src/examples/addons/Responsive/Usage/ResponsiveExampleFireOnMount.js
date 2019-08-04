import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react'

export default class ResponsiveExampleFireOnMount extends Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  render() {
    const { width } = this.state
    const textAlign =
      width >= Responsive.onlyComputer.minWidth ? 'right' : 'left'

    return (
      <Responsive
        as={Grid}
        columns={1}
        fireOnMount
        onUpdate={this.handleOnUpdate}
      >
        <Grid.Column textAlign={textAlign}>
          <Segment>
            This grid has responsive align of the text. It will be right aligned
            on computer and left aligned on other breakpoints.
          </Segment>
        </Grid.Column>
      </Responsive>
    )
  }
}

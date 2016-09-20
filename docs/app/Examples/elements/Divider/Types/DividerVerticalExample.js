import React, { Component } from 'react'
import { Grid, Segment, Divider } from 'stardust'

export default class DividerVerticalExample extends Component {
  render() {
    return (
      <Grid columns={3} relaxed>
        <Grid.Column>
          <Segment basic>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
        <Divider vertical>Or</Divider>
        <Grid.Column>
          <Segment basic>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
        <Divider vertical>And</Divider>
        <Grid.Column>
          <Segment basic>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

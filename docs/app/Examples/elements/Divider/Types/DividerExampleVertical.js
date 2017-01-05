import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'

const DividerExampleVertical = () => (
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

export default DividerExampleVertical

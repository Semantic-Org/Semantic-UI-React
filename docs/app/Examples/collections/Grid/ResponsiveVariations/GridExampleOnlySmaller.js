import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleOnlySmaller = () => (
  <Grid>
    <Grid.Row columns={1} onlySmaller='tablet'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} onlySmaller='computer'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleOnlySmaller

import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleInverted = () => (
  <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          1
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          2
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          3
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleInverted

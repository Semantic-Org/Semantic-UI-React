import React from 'react'
import { GridRow, GridColumn, Grid, Segment } from 'semantic-ui-react'

const GridExampleInverted = () => (
  <Grid columns='equal' divided inverted padded>
    <GridRow color='black' textAlign='center'>
      <GridColumn>
        <Segment color='black' inverted>
          1
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment color='black' inverted>
          2
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment color='black' inverted>
          3
        </Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleInverted

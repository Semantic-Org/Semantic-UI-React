import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column } = Grid

const GridReversedTabletExample = () => (
  <Grid reversed='tablet' columns='equal'>
    <Column>Tablet Fourth</Column>
    <Column>Tablet Third</Column>
    <Column>Tablet Second</Column>
    <Column>Tablet First</Column>
  </Grid>
)

export default GridReversedTabletExample

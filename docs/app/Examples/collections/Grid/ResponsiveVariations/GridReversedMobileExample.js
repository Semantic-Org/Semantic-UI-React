import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column } = Grid

const GridReversedMobileExample = () => (
  <Grid reversed='mobile' columns='equal'>
    <Column>Mobile Fourth</Column>
    <Column>Mobile Third</Column>
    <Column>Mobile Second</Column>
    <Column>Mobile First</Column>
  </Grid>
)

export default GridReversedMobileExample

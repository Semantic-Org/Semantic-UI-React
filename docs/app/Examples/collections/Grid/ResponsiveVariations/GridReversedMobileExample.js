import React from 'react'
import { Grid } from 'stardust'

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

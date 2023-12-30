import _ from 'lodash'
import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const GridColoredRowExample = () => (
  <Grid padded>
    {colors.map((color) => (
      <GridRow color={color} key={color}>
        <GridColumn>{_.capitalize(color)}</GridColumn>
      </GridRow>
    ))}
  </Grid>
)

export default GridColoredRowExample

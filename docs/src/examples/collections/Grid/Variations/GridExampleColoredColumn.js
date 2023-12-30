import _ from 'lodash'
import React from 'react'
import { GridColumn, Grid } from 'semantic-ui-react'

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

const GridExampleColoredColumn = () => (
  <Grid columns={5} padded>
    {colors.map((color) => (
      <GridColumn color={color} key={color}>
        {_.capitalize(color)}
      </GridColumn>
    ))}
  </Grid>
)

export default GridExampleColoredColumn

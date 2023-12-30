import React from 'react'
import { MenuItem, GridRow, GridColumn, Grid, Menu } from 'semantic-ui-react'

const GridExampleTextAlignmentCenter = () => (
  <Grid textAlign='center' columns={3}>
    <GridRow>
      <GridColumn>
        <Menu fluid vertical>
          <MenuItem className='header'>Cats</MenuItem>
        </Menu>
      </GridColumn>
      <GridColumn>
        <Menu fluid vertical>
          <MenuItem className='header'>Dogs</MenuItem>
          <MenuItem>Poodle</MenuItem>
          <MenuItem>Cockerspaniel</MenuItem>
        </Menu>
      </GridColumn>
      <GridColumn>
        <Menu fluid vertical>
          <MenuItem className='header'>Monkeys</MenuItem>
        </Menu>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleTextAlignmentCenter

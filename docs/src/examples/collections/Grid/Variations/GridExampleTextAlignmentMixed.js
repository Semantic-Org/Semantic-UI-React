import React from 'react'
import { MenuItem, GridRow, GridColumn, Grid, Menu } from 'semantic-ui-react'

const GridExampleTextAlignmentJustified = () => (
  <Grid>
    <GridRow columns={3}>
      <GridColumn>
        <Menu fluid vertical>
          <MenuItem className='header'>Cats</MenuItem>
        </Menu>
      </GridColumn>
      <GridColumn textAlign='center'>
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
    <GridRow textAlign='justified'>
      <GridColumn>
        <p>
          Justified content fits exactly inside the grid column, taking up the
          entire width from one side to the other. Justified content fits
          exactly inside the grid column, taking up the entire width from one
          side to the other. Justified content fits exactly inside the grid
          column, taking up the entire width from one side to the other.
          Justified content fits exactly inside the grid column, taking up the
          entire width from one side to the other. Justified content fits
          exactly inside the grid column, taking up the entire width from one
          side to the other.
        </p>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleTextAlignmentJustified

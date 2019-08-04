import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

const GridExampleTextAlignmentJustified = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row textAlign='justified'>
      <Grid.Column>
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
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleTextAlignmentJustified

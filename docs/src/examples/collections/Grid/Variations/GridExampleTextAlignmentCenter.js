import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

const GridExampleTextAlignmentCenter = () => (
  <Grid textAlign='center' columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
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
  </Grid>
)

export default GridExampleTextAlignmentCenter

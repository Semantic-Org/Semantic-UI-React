import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridTextAlignmentCenterExample = () => (
  <Grid textAlign='center' columns={3}>
    <Row>
      <Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Column>
      <Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Column>
      <Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Column>
    </Row>
  </Grid>
)

export default GridTextAlignmentCenterExample

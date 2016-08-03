import React from 'react'
import { Grid, Menu } from 'stardust'

// TODO: Update <Menu> usage after v1 API

const { Column, Row } = Grid

const GridTextAlignmentRightExample = () => (
  <Grid textAlign='right' columns={3}>
    <Row>
      <Column>
        <Menu className='vertical fluid'>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Column>
      <Column>
        <Menu className='vertical fluid'>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Column>
      <Column>
        <Menu className='vertical fluid'>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Column>
    </Row>
  </Grid>
)

export default GridTextAlignmentRightExample

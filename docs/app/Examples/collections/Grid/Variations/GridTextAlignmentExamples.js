import React from 'react'
import { Divider, Grid, Menu } from 'stardust'

// TODO: Update <Menu> usage after v1 API

const { Column, Row } = Grid

const GridCenteredExample = () => (
  <div>
    <Grid aligned='center' column={3}>
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

    <Divider />

    <Grid aligned='center'>
      <Row column={3}>
        <Column>
          <Menu className='vertical fluid'>
            <Menu.Item className='header'>Cats</Menu.Item>
          </Menu>
        </Column>
        <Column aligned='aligned'>
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
      <Row aligned='justified'>
        <Column>
          <p>
            Justified content fits exactly inside the grid column, taking up the entire width from one side to the
            other. Justified content fits exactly inside the grid column, taking up the entire width from one side to
            the other. Justified content fits exactly inside the grid column, taking up the entire width from one side
            to the other. Justified content fits exactly inside the grid column, taking up the entire width from one
            side to the other. Justified content fits exactly inside the grid column, taking up the entire width from
            one side to the other.
          </p>
        </Column>
      </Row>
    </Grid>

    <Divider />

    <Grid aligned='right' column={3}>
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
  </div>
)

export default GridCenteredExample

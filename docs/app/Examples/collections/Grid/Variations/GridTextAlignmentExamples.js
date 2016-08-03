import React from 'react'
import { Divider, Grid, Menu } from 'stardust'

// TODO: Update <Menu> usage after v1 API

const { Column, Row } = Grid

const GridTextAlignmentExample = () => (
  <div>
    <Grid textAlign='center' columns={3}>
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

    <Grid textAlign='center'>
      <Row columns={3}>
        <Column>
          <Menu className='vertical fluid'>
            <Menu.Item className='header'>Cats</Menu.Item>
          </Menu>
        </Column>
        <Column textAlign='left'>
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
      <Row textAlign='justified'>
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
  </div>
)

export default GridTextAlignmentExample

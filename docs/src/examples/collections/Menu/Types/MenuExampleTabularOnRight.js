import React, { Component } from 'react'
import { MenuItem, GridColumn, Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnRight extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <GridColumn stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </GridColumn>

        <GridColumn width={4}>
          <Menu fluid vertical tabular='right'>
            <MenuItem
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </GridColumn>
      </Grid>
    )
  }
}

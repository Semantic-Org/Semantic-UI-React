import _ from 'lodash/fp'
import React, { Component } from 'react'
import * as stardust from 'stardust'
import { typeOrder } from 'docs/app/utils'
import META from 'src/utils/Meta'

const { Menu, Input } = stardust

export default class Sidebar extends Component {
  state = { query: '' }

  handleSearchChange = e => this.setState({ query: e.target.value })

  renderItemsByType = (type) => {
    const items = _.flow(
      _.filter(_.overEvery([
        META.isParent,
        META.isType(type),
        ({ _meta }) => new RegExp(this.state.query, 'i').test(_meta.name),
      ])),
      _.sortBy('_meta.name'),
      _.map(component => {
        const name = component._meta.name
        return <Menu.Item key={name} name={name} href={`#${name}`} />
      })
    )(stardust)

    return _.isEmpty(items) ? [] : (
      <div className='item' key={type}>
        <div className='header'>{_.capitalize(type)}s</div>
        <div className='menu'>{items}</div>
      </div>
    )
  }

  render() {
    return (
      <Menu className='inverted secondary vertical fluid' style={{ margin: 0 }}>
        <Menu.Item>
          <Input
            className='transparent inverted icon'
            icon='search'
            placeholder='Search'
            iconClass='search link icon'
            onChange={this.handleSearchChange}
          />
        </Menu.Item>
        {_.map(this.renderItemsByType, typeOrder)}
      </Menu>
    )
  }
}

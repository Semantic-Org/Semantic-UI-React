import _ from 'lodash/fp'
import React, { Component } from 'react'
import * as stardust from 'stardust'
import META from 'src/utils/Meta'

const { Menu, Input } = stardust

export default class Sidebar extends Component {
  state = { query: '' }

  handleSearchChange = e => this.setState({ query: e.target.value })

  getComponentsByQuery() {
    return _.filter(component => {
      const name = component._meta.name
      const isParent = META.isParent(component)
      const isQueryMatch = new RegExp(this.state.query, 'i').test(name)
      return isParent && isQueryMatch
    }, stardust)
  }

  getComponentsByType = type => {
    const items = _.flow(
      _.filter(component => META.isType(component, type)),
      _.sortBy((component, name) => name),
      _.map(component => {
        const name = component._meta.name
        return <Menu.Item key={name} name={name} href={`#${name}`} />
      })
    )(this.getComponentsByQuery())

    return _.isEmpty(items) ? [] : (
      <div className='item'>
        <div className='header'>{_.capitalize(type)}s</div>
        <div className='menu'>{items}</div>
      </div>
    )
  }

  render() {
    const addons = this.getComponentsByType(META.type.addon)
    const elements = this.getComponentsByType(META.type.element)
    const collections = this.getComponentsByType(META.type.collection)
    const views = this.getComponentsByType(META.type.view)
    const modules = this.getComponentsByType(META.type.module)

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
        {addons}
        {elements}
        {collections}
        {views}
        {modules}
      </Menu>
    )
  }
}

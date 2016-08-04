import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import * as stardust from 'stardust'
import { typeOrder } from 'docs/app/utils'
import META from 'src/utils/Meta'

const { Menu, Icon, Input } = stardust

export default class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object,
  }
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
      _.map(({ _meta }) => {
        const route = `${_meta.type}s/${_.kebabCase(_meta.name)}`

        return (
          <Link to={route} className='item' activeClassName='active' key={_meta.name}>
            {_meta.name}
          </Link>
        )
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
    const { style } = this.props
    return (
      <Menu className='vertical fixed inverted' style={{ ...style }}>
        <div className='item'>
          <img src='/logo.png' style={{ marginRight: '1em' }} />
          <strong>UI-React Docs</strong>
        </div>
        <a className='item' href='https://github.com/TechnologyAdvice/stardust'>
          <Icon name='github' /> GitHub
        </a>
        <div className='item'>
          <Input
            className='transparent inverted icon'
            icon='search'
            placeholder='Search'
            iconClass='search link icon'
            onChange={this.handleSearchChange}
          />
        </div>
        {_.map(this.renderItemsByType, typeOrder)}
        <a className='item' href='https://github.com/TechnologyAdvice/stardust/blob/master/CHANGELOG.md'>
          <Icon name='file text outline' /> CHANGELOG
        </a>
      </Menu>
    )
  }
}

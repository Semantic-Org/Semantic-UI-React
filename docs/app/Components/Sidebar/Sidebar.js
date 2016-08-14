import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'

import pkg from 'package.json'
import * as stardust from 'src'
import { typeOrder } from 'docs/app/utils'
import { keyboardKey, META } from 'src/lib'
import Logo from 'docs/app/Components/Logo/Logo'
import {
  Menu,
  Icon,
  Input,
} from 'src'

export default class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object,
  }
  state = { query: '' }

  handleSearchChange = e => this.setState({ query: e.target.value })

  componentDidMount() {
    document.addEventListener('keydown', this.handleDocumentKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }

  handleDocumentKeyDown = (e) => {
    const code = keyboardKey.getCode(e)
    const isAZ = code >= 65 && code <= 90
    const bodyHasFocus = document.activeElement === document.body

    if (isAZ && bodyHasFocus) this._searchInput.focus()
  }

  renderItemsByType = (type) => {
    const items = _.flow(
      _.filter(_.overEvery([
        META.isParent,
        META.isType(type),
        ({ _meta }) => new RegExp(this.state.query, 'i').test(_meta.name),
      ])),
      _.sortBy('_meta.name'),
      _.map(({ _meta }) => {
        const route = `/${_meta.type}s/${_.kebabCase(_meta.name)}`

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
          <Logo spaced='right' size='mini' />
          <strong>
            Semantic-UI-React &nbsp;
            <small><em>{pkg.version}</em></small>
          </strong>
        </div>
        <Link to='/introduction' className='item' activeClassName='active'>
          Introduction
        </Link>
        <a className='item' href='https://github.com/TechnologyAdvice/stardust'>
          <Icon name='github' /> GitHub
        </a>
        <div className='item'>
          <Input
            className='transparent inverted icon'
            icon='search'
            placeholder='Start typing...'
            onChange={this.handleSearchChange}
            ref={(c) => {
              if (c !== null) this._searchInput = findDOMNode(c).querySelector('input')
            }}
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

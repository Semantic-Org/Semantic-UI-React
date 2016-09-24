import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link, routerShape } from 'react-router'

import pkg from 'package.json'
import stardust from 'src'
import { typeOrder } from 'docs/app/utils'
import { keyboardKey, META } from 'src/lib'
import Logo from 'docs/app/Components/Logo/Logo'
import {
  Menu,
  Icon,
  Input,
} from 'src'

const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name')
)(stardust)

const getRoute = (_meta) => `/${_meta.type}s/${_.kebabCase(_meta.name)}`

const MenuItem = ({ meta, children, ...rest }) => (
  <Link key={meta.name} to={getRoute(meta)} {...rest}>
    {children || meta.name}
  </Link>
)
MenuItem.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}
MenuItem.defaultProps = {
  activeClassName: 'active',
  className: 'item',
}
const selectedItemLabel = <span style={{ color: '#35bdb2', float: 'right' }}>Press Enter</span>

export default class Sidebar extends Component {
  static contextTypes = {
    router: routerShape,
  }
  static propTypes = {
    style: PropTypes.object,
  }
  state = { query: '' }
  filteredComponents = parentComponents

  componentDidMount() {
    document.addEventListener('keydown', this.handleDocumentKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }

  handleDocumentKeyDown = (e) => {
    const code = keyboardKey.getCode(e)
    const isAZ = code >= 65 && code <= 90
    const hasModifier = e.altKey || e.ctrlKey || e.metaKey
    const bodyHasFocus = document.activeElement === document.body

    if (!hasModifier && isAZ && bodyHasFocus) this._searchInput.focus()
  }

  handleItemClick = () => {
    const { query } = this.state

    if (query) this.setState({ query: '' })
    if (document.activeElement === this._searchInput) this._searchInput.blur()
  }

  handleSearchChange = e => this.setState({
    selectedItemIndex: 0,
    query: e.target.value,
  })

  handleSearchKeyDown = e => {
    const { router } = this.context
    const { selectedItemIndex } = this.state
    const code = keyboardKey.getCode(e)

    if (code === keyboardKey.Enter && this.selectedRoute) {
      e.preventDefault()
      router.push(this.selectedRoute)
      this.selectedRoute = null
      this._searchInput.blur()
      this.setState({ query: '' })
    }

    if (code === keyboardKey.ArrowDown) {
      e.preventDefault()
      const next = _.min([selectedItemIndex + 1, this.filteredComponents.length - 1])
      this.selectedRoute = getRoute(this.filteredComponents[next]._meta)
      this.setState({ selectedItemIndex: next })
    }

    if (code === keyboardKey.ArrowUp) {
      e.preventDefault()
      const next = _.max([selectedItemIndex - 1, 0])
      this.selectedRoute = getRoute(this.filteredComponents[next]._meta)
      this.setState({ selectedItemIndex: next })
    }
  }

  menuItemsByType = _.map((type) => {
    const items = _.flow(
      _.filter(META.isType(type)),
      _.map(({ _meta }) => (
        <MenuItem key={_meta.name} meta={_meta} onClick={this.handleItemClick} />
      ))
    )(parentComponents)

    return (
      <div className='item' key={type}>
        <div className='header'>{_.capitalize(type)}s</div>
        <div className='menu'>{items}</div>
      </div>
    )
  }, typeOrder)

  renderSearchItems = () => {
    const { selectedItemIndex, query } = this.state
    if (!query) return

    let itemIndex = -1
    const startsWithMatches = []
    const containsMatches = []

    _.each(component => {
      if (new RegExp(`^${_.escapeRegExp(query)}`, 'i').test(component._meta.name)) {
        startsWithMatches.push(component)
      } else if (new RegExp(_.escapeRegExp(query), 'i').test(component._meta.name)) {
        containsMatches.push(component)
      }
    }, parentComponents)

    this.filteredComponents = [...startsWithMatches, ...containsMatches]
    const menuItems = _.map(({ _meta }) => {
      itemIndex++
      const isSelected = itemIndex === selectedItemIndex

      if (isSelected) this.selectedRoute = getRoute(_meta)

      return (
        <MenuItem
          key={_meta.name}
          meta={_meta}
          className={isSelected ? 'active item' : 'item'}
          // don't show the current route as active
          activeClassName=''
          onClick={this.handleItemClick}
        >
          {_meta.name}
          {isSelected && selectedItemLabel}
        </MenuItem>
      )
    }, this.filteredComponents)

    return <div className='menu'>{menuItems}</div>
  }

  render() {
    const { style } = this.props
    const { query } = this.state
    return (
      <Menu className='vertical fixed inverted' style={{ ...style }}>
        <div className='item'>
          <Logo spaced='right' size='mini' />
          <strong>
            Semantic-UI-React &nbsp;
            <small><em>{pkg.version}</em></small>
          </strong>
        </div>
        <div className='item'>
          <div className='header'>Getting Started</div>
          <div className='menu'>
            <Link to='/introduction' className='item' activeClassName='active'>
              Introduction
            </Link>
            <a className='item' href='https://github.com/TechnologyAdvice/stardust'>
              <Icon name='github' /> GitHub
            </a>
            <a className='item' href='https://github.com/TechnologyAdvice/stardust/blob/master/CHANGELOG.md'>
              <Icon name='file text outline' /> CHANGELOG
            </a>
          </div>
        </div>
        <div className='item'>
          <Input
            className='transparent inverted icon'
            icon='search'
            placeholder='Start typing...'
            value={query}
            onChange={this.handleSearchChange}
            onKeyDown={this.handleSearchKeyDown}
            ref={(c) => {
              if (c !== null) this._searchInput = findDOMNode(c).querySelector('input')
            }}
          />
        </div>
        {query ? this.renderSearchItems() : this.menuItemsByType}
      </Menu>
    )
  }
}

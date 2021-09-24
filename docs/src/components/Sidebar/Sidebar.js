import keyboardKey from 'keyboard-key'
import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-static'
import { Menu, Icon, Input } from 'semantic-ui-react'

import CarbonAd from 'docs/src/components/CarbonAd/CarbonAd'
import Logo from 'docs/src/components/Logo/Logo'
import { docTypes, getComponentPathname, typeOrder, repoURL } from 'docs/src/utils'

const selectedItemLabelStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  padding: '4px 0.5rem',
  margin: '2px',
  color: '#8ff',
  background: '#222',
}
const SelectedItemLabel = ({ showArrows }) => (
  <span style={selectedItemLabelStyle}>
    {showArrows && <Icon name='exchange' rotated='clockwise' />}
    {showArrows && 'or '}
    Enter
  </span>
)
SelectedItemLabel.propTypes = {
  showArrows: PropTypes.bool,
}

class Sidebar extends Component {
  state = { query: '' }

  constructor(props) {
    super(props)

    this.filteredMenu = props.componentMenu
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleDocumentKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }

  handleDocumentKeyDown = (e) => {
    const isSlash = keyboardKey.getKey(e) === '/'
    const hasModifier = e.altKey || e.ctrlKey || e.metaKey
    const bodyHasFocus = document.activeElement === document.body

    if (!hasModifier && isSlash && bodyHasFocus) this._searchInput.focus()
  }

  handleItemClick = () => {
    const { query } = this.state

    if (query) this.setState({ query: '' })
    if (document.activeElement === this._searchInput) this._searchInput.blur()
  }

  handleSearchChange = (e) => {
    // ignore first "/" on search focus
    if (e.target.value === '/') return

    this.setState({
      selectedItemIndex: 0,
      query: e.target.value,
    })
  }

  handleSearchKeyDown = (e) => {
    const { history } = this.props
    const { selectedItemIndex } = this.state
    const code = keyboardKey.getCode(e)

    if (code === keyboardKey.Enter && this.selectedRoute) {
      e.preventDefault()
      history.push(this.selectedRoute)
      this.selectedRoute = null
      this.setState({ query: '' })
    }

    if (code === keyboardKey.ArrowDown) {
      e.preventDefault()
      const next = _.min([selectedItemIndex + 1, this.filteredMenu.length - 1])
      this.selectedRoute = getComponentPathname(this.filteredMenu[next])
      this.setState({ selectedItemIndex: next })
    }

    if (code === keyboardKey.ArrowUp) {
      e.preventDefault()
      const next = _.max([selectedItemIndex - 1, 0])
      this.selectedRoute = getComponentPathname(this.filteredMenu[next])
      this.setState({ selectedItemIndex: next })
    }
  }

  handleSearchRef = (c) => {
    this._searchInput = c && c.querySelector('input')
  }

  menuItemsByType = _.map((nextType) => {
    const items = _.flow(
      _.filter(({ type }) => type === nextType),
      _.map((info) => (
        <Menu.Item
          key={info.displayName}
          name={info.displayName}
          onClick={this.handleItemClick}
          as={Link}
          to={getComponentPathname(info)}
          activeClassName='active'
        />
      )),
    )(this.props.componentMenu)

    return (
      <Menu.Item key={nextType}>
        <Menu.Header>{_.capitalize(nextType)}s</Menu.Header>
        <Menu.Menu>{items}</Menu.Menu>
      </Menu.Item>
    )
  }, typeOrder)

  renderSearchItems = () => {
    const { selectedItemIndex, query } = this.state
    if (!query) return

    let itemIndex = -1
    const startsWithMatches = []
    const containsMatches = []
    const escapedQuery = _.escapeRegExp(query)

    _.each((info) => {
      if (new RegExp(`^${escapedQuery}`, 'i').test(info.displayName)) {
        startsWithMatches.push(info)
      } else if (new RegExp(escapedQuery, 'i').test(info.displayName)) {
        containsMatches.push(info)
      }
    }, this.props.componentMenu)

    this.filteredMenu = [...startsWithMatches, ...containsMatches]
    const hasMultipleMatches = this.filteredMenu.length > 1
    const menuItems = _.map((info) => {
      itemIndex += 1
      const isSelected = itemIndex === selectedItemIndex

      if (isSelected) this.selectedRoute = getComponentPathname(info)

      return (
        <Menu.Item
          key={info.displayName}
          name={info.displayName}
          onClick={this.handleItemClick}
          active={isSelected}
          as={Link}
          to={getComponentPathname(info)}
        >
          {info.displayName}
          {isSelected && <SelectedItemLabel showArrows={hasMultipleMatches} />}
        </Menu.Item>
      )
    }, this.filteredMenu)

    return <Menu.Menu>{menuItems}</Menu.Menu>
  }

  render() {
    const { style, version } = this.props
    const { query } = this.state

    return (
      <div style={{ ...style, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ flex: 1, overflowY: 'scroll' }}>
          <Menu fluid inverted vertical borderless compact>
            <Menu.Item>
              <Logo spaced='right' size='mini' />
              <strong>
                Semantic UI React &nbsp;
                <small>
                  <em>{version}</em>
                </small>
              </strong>
              <Menu.Menu>
                <Menu.Item as='a' href={repoURL} target='_blank' rel='noopener noreferrer'>
                  <Icon name='github' /> GitHub
                </Menu.Item>
                <Menu.Item
                  as='a'
                  href={`${repoURL}/blob/master/CHANGELOG.md`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon name='file alternate outline' /> CHANGELOG
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Getting Started</Menu.Header>
              <Menu.Menu>
                <Menu.Item as={Link} exact to='/' activeClassName='active'>
                  Introduction
                </Menu.Item>
                <Menu.Item as={Link} exact to='/usage' activeClassName='active'>
                  Get Started
                </Menu.Item>
                <Menu.Item as={Link} exact to='/augmentation' activeClassName='active'>
                  Composition
                </Menu.Item>
                <Menu.Item as={Link} exact to='/shorthand-props' activeClassName='active'>
                  Shorthand Props
                </Menu.Item>
                <Menu.Item as={Link} exact to='/theming' activeClassName='active'>
                  Theming
                </Menu.Item>
                <Menu.Item as={Link} exact to='/layouts' activeClassName='active'>
                  Layout examples
                </Menu.Item>
                <Menu.Item as={Link} exact to='/prototypes' activeClassName='active'>
                  Prototypes
                </Menu.Item>
                <Menu.Item as={Link} exact to='/migration-guide' activeClassName='active'>
                  Migration guide to v2
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item fitted>
              <Input
                fluid
                icon={{ name: 'filter', color: 'teal', inverted: true, bordered: true }}
                placeholder='Press "/" to filter components'
                ref={this.handleSearchRef}
                value={query}
                onChange={this.handleSearchChange}
                onKeyDown={this.handleSearchKeyDown}
              />
            </Menu.Item>
            {query ? this.renderSearchItems() : this.menuItemsByType}
          </Menu>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <CarbonAd />
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  componentMenu: docTypes.componentMenu.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  style: PropTypes.object,
  version: PropTypes.string.isRequired,
}

export default Sidebar

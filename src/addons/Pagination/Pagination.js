import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  META,
  paginationFactory,
} from '../../lib'
import Menu from '../../collections/Menu'
import PaginationItem from './PaginationItem'

/**
 * A component to render a pagination.
 */
export default class Pagination extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    defaultActivePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    activePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    displayRange: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    marginRange: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    onChange: PropTypes.func,

    totalPages: PropTypes.number.isRequired,
  }

  static autoControlledProps = [
    'activePage',
  ]

  static defaultProps = {
    displayRange: 2,
    // firstItem: '«',
    // lastItem: '»',
    marginRange: 2,
    // nextItem: '⟩',
    // prevItem: '⟨',
  }

  static _meta = {
    name: 'Pagination',
    type: META.TYPES.ADDON,
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  computeNextActivePage = (nextPage) => {
    const { pageCount } = this.props
    const { activePage } = this.state

    if (nextPage === 'first') return 1
    if (nextPage === 'last') return pageCount

    if (nextPage === 'prev') return activePage - 1
    if (nextPage === 'next') return activePage + 1

    return nextPage
  }

  computeTabIndex = (pageName) => {
    const { pageCount } = this.props

    if (pageName === 'first') return 0
    if (pageName === 'prev') return 1

    if (pageName === 'next') return pageCount + 1
    if (pageName === 'last') return pageCount + 2

    return pageName
  }

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  handleItemClick = (e, { name }) => {
    const nextActivePage = this.computeNextActivePage(name)

    this.trySetState({ activePage: nextActivePage })
    _.invoke(this.props, 'onChange', e, { ...this.props, activePage: nextActivePage })
  }

  handleItemLeft = (e) => {
    const nextActivePage = this.computeNextActivePage('prev')

    this.trySetState({ activePage: nextActivePage })
    _.invoke(this.props, 'onChange', e, { ...this.props, activePage: nextActivePage })
  }

  handleItemRight = (e) => {
    const nextActivePage = this.computeNextActivePage('next')

    this.trySetState({ activePage: nextActivePage })
    _.invoke(this.props, 'onChange', e, { ...this.props, activePage: nextActivePage })
  }

  // ----------------------------------------
  // Overrides
  // ----------------------------------------

  handleItemOverrides = pageName => (predefinedProps) => {
    const { activePage } = this.state

    return {
      active: activePage === pageName,
      key: pageName,
      name: pageName,
      onClick: (e, itemProps) => {
        _.invoke(predefinedProps, 'onClick', e, itemProps)
        this.handleItemClick(e, itemProps)
      },
      onLeftKeyDown: this.handleItemLeft,
      onRightKeyDown: this.handleItemRight,
      tabIndex: this.computeTabIndex(pageName),
    }
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const { displayRange, firstItem, lastItem, navItem, nextItem, pageCount, prevItem, totalPages } = this.props
    const items = paginationFactory({
      current: activePage,
      total: totalPages,
    })

    const { marginRange } = this.props
    const { activePage } = this.state

    // console.log(computePrevRange(activePage, displayRange, marginRange))

    return (
      <Menu aria-label='Pagination Navigation' pagination role='navigation'>
        {PaginationItem.create(firstItem, { overrideProps: this.handleItemOverrides('first') })}
        {PaginationItem.create(prevItem, { overrideProps: this.handleItemOverrides('prev') })}

        {_.map(items, index => PaginationItem.create(navItem || '', {
          defaultProps: {
            content: index,
          },
          overrideProps: this.handleItemOverrides(index),
        }))}

        {PaginationItem.create(nextItem, { overrideProps: this.handleItemOverrides('next') })}
        {PaginationItem.create(lastItem, { overrideProps: this.handleItemOverrides('last') })}
      </Menu>
    )
  }
}

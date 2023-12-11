import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createPaginationItems,
  customPropTypes,
  getUnhandledProps,
  useAutoControlledValue,
} from '../../lib'
import Menu from '../../collections/Menu'
import PaginationItem from './PaginationItem'

/**
 * A component to render a pagination.
 */
const Pagination = React.forwardRef(function (props, ref) {
  const {
    'aria-label': ariaLabel,
    boundaryRange,
    disabled,
    ellipsisItem,
    siblingRange,
    totalPages,
  } = props
  const [activePage, setActivePage] = useAutoControlledValue({
    state: props.activePage,
    defaultState: props.defaultActivePage,
    initialState: 1,
  })

  const handleItemClick = (e, { value: nextActivePage }) => {
    const prevActivePage = activePage

    // Heads up! We need the cast to the "number" type there, as `activePage` can be a string
    if (+prevActivePage === +nextActivePage) {
      return
    }

    setActivePage(nextActivePage)
    _.invoke(props, 'onPageChange', e, { ...props, activePage: nextActivePage })
  }

  const handleItemOverrides = (active, type, value) => (predefinedProps) => ({
    active,
    type,
    key: `${type}-${value}`,
    onClick: (e, itemProps) => {
      _.invoke(predefinedProps, 'onClick', e, itemProps)

      if (itemProps.type !== 'ellipsisItem') {
        handleItemClick(e, itemProps)
      }
    },
  })

  const items = createPaginationItems({
    activePage,
    boundaryRange,
    hideEllipsis: _.isNil(ellipsisItem),
    siblingRange,
    totalPages,
  })
  const rest = getUnhandledProps(Pagination, props)

  return (
    <Menu {...rest} aria-label={ariaLabel} pagination role='navigation' ref={ref}>
      {_.map(items, ({ active, type, value }) =>
        PaginationItem.create(props[type], {
          defaultProps: {
            content: value,
            disabled,
            value,
          },
          overrideProps: handleItemOverrides(active, type, value),
        }),
      )}
    </Menu>
  )
})

Pagination.displayName = 'Pagination'
Pagination.propTypes = {
  /** A pagination item can have an aria label. */
  'aria-label': PropTypes.string,

  /** Initial activePage value. */
  defaultActivePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active page. */
  activePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Number of always visible pages at the beginning and end. */
  boundaryRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A pagination can be disabled. */
  disabled: PropTypes.bool,

  /** A shorthand for PaginationItem. */
  ellipsisItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  firstItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  lastItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  nextItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  pageItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  prevItem: customPropTypes.itemShorthand,

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: PropTypes.func,

  /** Number of always visible pages before and after the current one. */
  siblingRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Total number of pages. */
  totalPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

Pagination.defaultProps = {
  'aria-label': 'Pagination Navigation',
  boundaryRange: 1,
  ellipsisItem: '...',
  firstItem: {
    'aria-label': 'First item',
    content: '«',
  },
  lastItem: {
    'aria-label': 'Last item',
    content: '»',
  },
  nextItem: {
    'aria-label': 'Next item',
    content: '⟩',
  },
  pageItem: {},
  prevItem: {
    'aria-label': 'Previous item',
    content: '⟨',
  },
  siblingRange: 1,
}

Pagination.Item = PaginationItem

export default Pagination

import _ from 'lodash'
import PropTypes from 'prop-types'
import { Component } from 'react'

import {
  createShorthandFactory,
  keyboardKey,
  META,
} from '../../lib'
import MenuItem from '../../collections/Menu/MenuItem'

/**
 * An item of a pagination.
 */
class PaginationItem extends Component {
  static propTypes = {
    /** A pagination item can be active. */
    active: PropTypes.bool,

    /** A pagination item can have an aria label. */
    ariaLabel: PropTypes.string,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Called on key down.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onKeyDown: PropTypes.func,

    /** A pagination should have a type. */
    type: PropTypes.oneOf([
      'ellipsisItem',
      'firstItem',
      'prevItem',
      'pageItem',
      'nextItem',
      'lastItem',
    ]),
  }

  static _meta = {
    name: 'PaginationItem',
    parent: 'Pagination',
    type: META.TYPES.ADDON,
  }

  handleClick = (e) => {
    const { type } = this.props

    if (type !== 'ellipsisItem') _.invoke(this.props, 'onClick', e, this.props)
  }

  handleKeyDown = (e) => {
    _.invoke(this.props, 'onKeyDown', e, this.props)
    if (keyboardKey.getCode(e) === keyboardKey.Enter) _.invoke(this.props, 'onClick', e, this.props)
  }

  render() {
    const { active, ariaLabel, type, ...rest } = this.props
    const disabled = type === 'ellipsisItem'

    return MenuItem.create({
      ...rest,
      active,
      'aria-current': active,
      'aria-label': ariaLabel,
      disabled,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      tabIndex: disabled ? -1 : 0,
    })
  }
}

PaginationItem.create = createShorthandFactory(PaginationItem, content => ({ content }))

export default PaginationItem

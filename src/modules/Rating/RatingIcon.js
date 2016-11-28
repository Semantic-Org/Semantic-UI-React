import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  META,
  useKeyOnly,
  keyboardKey,
} from '../../lib'

/**
 * An internal icon sub-component for Rating component
 */
export default class RatingIcon extends Component {
  static propTypes = {
    /** Indicates activity of an icon. */
    active: PropTypes.bool,

    /** An index of icon inside Rating. */
    index: PropTypes.number,

    /** Called with (event, index) after user clicked on an icon. */
    onClick: PropTypes.func,

    /** Called with (index) after user move cursor to an icon. */
    onMouseEnter: PropTypes.func,

    /** Indicates selection of an icon. */
    selected: PropTypes.bool,
  }

  static _meta = {
    name: 'RatingIcon',
    parent: 'Rating',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {
    const { onClick, index } = this.props

    if (onClick) onClick(e, index)
  }

  handleKeyUp = (e) => {
    const { onClick, index } = this.props

    if (onClick) {
      switch (keyboardKey.getCode(e)) {
        case keyboardKey.Enter:
        case keyboardKey.Spacebar:
          e.preventDefault()
          onClick(e, index)
          break
        default:
          return
      }
    }
  }

  handleMouseEnter = () => {
    const { onMouseEnter, index } = this.props

    if (onMouseEnter) onMouseEnter(index)
  }

  render() {
    const { active, selected } = this.props
    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(selected, 'selected'),
      'icon'
    )
    const rest = _.omit(this.props, _.keys(RatingIcon.propTypes))

    return (
      <i role='radio' tabIndex={0}
        {...rest}
        className={classes}
        onKeyUp={this.handleKeyUp}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
      />
    )
  }
}

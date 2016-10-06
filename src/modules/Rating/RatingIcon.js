import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import { useKeyOnly } from '../../lib'

/**
 * An internal icon sub-component for Rating component
 */
export default class RatingIcon extends Component {
  static propTypes = {
    /** Indicates activity of an icon. */
    active: PropTypes.bool,

    /** An index of icon inside Rating. */
    index: PropTypes.bool,

    /** Called with (event, index) after user clicked on an icon. */
    onClick: PropTypes.func,

    /** Called with (index) after user move cursor to an icon. */
    onMouseEnter: PropTypes.func,

    /** Indicates selection of an icon. */
    selected: PropTypes.bool,
  }

  handleClick = (e) => {
    const { onClick, index } = this.props

    if (onClick) onClick(e, index)
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

    return <i className={classes} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} />
  }
}

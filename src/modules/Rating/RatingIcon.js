import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import { useKeyOnly } from '../../lib'

export default class RatingIcon extends Component {
  static propTypes = {
    active: PropTypes.bool,
    index: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
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

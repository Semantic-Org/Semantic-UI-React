import cx from 'clsx'
import keyboardKey from 'keyboard-key'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps, useKeyOnly } from '../../lib'

/**
 * An internal icon sub-component for Rating component
 */
const RatingIcon = React.forwardRef(function (props, ref) {
  const { active, className, selected } = props

  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(selected, 'selected'),
    'icon',
    className,
  )
  const rest = getUnhandledProps(RatingIcon, props)
  const ElementType = getComponentType(props, { defaultAs: 'i' })

  const handleClick = (e) => {
    props.onClick?.(e, props)
  }

  const handleKeyUp = (e) => {
    props.onKeyUp?.(e, props)

    switch (keyboardKey.getCode(e)) {
      case keyboardKey.Enter:
      case keyboardKey.Spacebar:
        e.preventDefault()
        props.onClick?.(e, props)
        break
      default:
    }
  }

  const handleMouseEnter = (e) => {
    props.onMouseEnter?.(e, props)
  }

  return (
    <ElementType
      role='radio'
      {...rest}
      className={classes}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    />
  )
})

RatingIcon.displayName = 'RatingIcon'
RatingIcon.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Indicates activity of an icon. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** An index of icon inside Rating. */
  index: PropTypes.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: PropTypes.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: PropTypes.func,

  /** Indicates selection of an icon. */
  selected: PropTypes.bool,
}

export default RatingIcon

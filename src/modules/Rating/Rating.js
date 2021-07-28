import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  getElementType,
  getUnhandledProps,
  SUI,
  useKeyOnly,
  useAutoControlledValue,
} from '../../lib'
import RatingIcon from './RatingIcon'

/**
 * A rating indicates user interest in content.
 */
const Rating = React.forwardRef(function (props, ref) {
  const { className, clearable, disabled, icon, maxRating, size } = props

  const [rating, setRating] = useAutoControlledValue({
    state: props.rating,
    defaultState: props.defaultRating,
    initialState: 0,
  })
  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  const [isSelecting, setIsSelecting] = React.useState(false)

  const classes = cx(
    'ui',
    icon,
    size,
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, 'selected'),
    'rating',
    className,
  )
  const rest = getUnhandledProps(Rating, props)
  const ElementType = getElementType(Rating, props)

  const handleIconClick = (e, { index }) => {
    if (disabled) {
      return
    }

    // default newRating is the clicked icon
    // allow toggling a binary rating
    // allow clearing ratings
    let newRating = index + 1

    if (clearable === 'auto' && maxRating === 1) {
      newRating = +!rating
    } else if (clearable === true && newRating === rating) {
      newRating = 0
    }

    // set rating
    setRating(newRating)
    setIsSelecting(false)

    _.invoke(props, 'onRate', e, { ...props, rating: newRating })
  }

  const handleIconMouseEnter = (e, { index }) => {
    if (disabled) {
      return
    }

    setSelectedIndex(index)
    setIsSelecting(true)
  }

  const handleMouseLeave = (...args) => {
    _.invoke(props, 'onMouseLeave', ...args)

    if (disabled) {
      return
    }

    setSelectedIndex(-1)
    setIsSelecting(false)
  }

  return (
    <ElementType
      role='radiogroup'
      {...rest}
      className={classes}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      tabIndex={disabled ? 0 : -1}
    >
      {_.times(maxRating, (i) => (
        /* TODO: use .create() factory */
        <RatingIcon
          tabIndex={disabled ? -1 : 0}
          active={rating >= i + 1}
          aria-checked={rating === i + 1}
          aria-posinset={i + 1}
          aria-setsize={maxRating}
          index={i}
          key={i}
          onClick={handleIconClick}
          onMouseEnter={handleIconMouseEnter}
          selected={selectedIndex >= i && isSelecting}
        />
      ))}
    </ElementType>
  )
})

Rating.displayName = 'Rating'
Rating.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: PropTypes.bool,

  /** A rating can use a set of star or heart icons. */
  icon: PropTypes.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: PropTypes.func,

  /** The current number of active icons. */
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A progress bar can vary in size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium', 'big')),
}

Rating.defaultProps = {
  clearable: 'auto',
  maxRating: 1,
}

Rating.Icon = RatingIcon

export default Rating

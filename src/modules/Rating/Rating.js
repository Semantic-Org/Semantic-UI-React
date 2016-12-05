import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'
import RatingIcon from './RatingIcon'

const _meta = {
  name: 'Rating',
  type: META.TYPES.MODULE,
  props: {
    clearable: ['auto'],
    icon: ['star', 'heart'],
    size: _.without(SUI.SIZES, 'medium', 'big'),
  },
}

/**
 * A rating indicates user interest in content
 */
export default class Rating extends Component {
  static autoControlledProps = [
    'rating',
  ]

  static defaultProps = {
    clearable: 'auto',
    maxRating: 1,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /**
     * You can clear the rating by clicking on the current start rating.
     * By default a rating will be only clearable if there is 1 icon.
     * Setting to `true`/`false` will allow or disallow a user to clear their rating.
     */
    clearable: PropTypes.oneOfType([
      PropTypes.oneOf(_meta.props.clearable),
      PropTypes.bool,
    ]),

    /** The initial rating value. */
    defaultRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** You can disable or enable interactive rating.  Makes a read-only rating. */
    disabled: PropTypes.bool,

    /** A rating can use a set of star or heart icons. */
    icon: PropTypes.oneOf(_meta.props.icon),

    /** The total number of icons. */
    maxRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /**
     * Called after user selects a new rating.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed rating.
     */
    onRate: PropTypes.func,

    /** The current number of active icons. */
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** A progress bar can vary in size. */
    size: PropTypes.oneOf(_meta.props.size),
  }

  static _meta = _meta
  static Icon = RatingIcon

  handleIconClick = (e, { index }) => {
    const { clearable, disabled, maxRating, onRate } = this.props
    const { rating } = this.state
    if (disabled) return

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
    this.trySetState({ rating: newRating }, { isSelecting: false })
    if (onRate) onRate(e, { ...this.props, rating: newRating })
  }

  handleIconMouseEnter = (e, { index }) => {
    if (this.props.disabled) return

    this.setState({ selectedIndex: index, isSelecting: true })
  }

  handleMouseLeave = (...args) => {
    _.invoke(this.props, 'onMouseLeave', ...args)

    if (this.props.disabled) return

    this.setState({ selectedIndex: -1, isSelecting: false })
  }

  render() {
    const {
      className,
      disabled,
      icon,
      maxRating,
      size,
    } = this.props
    const { rating, selectedIndex, isSelecting } = this.state

    const classes = cx(
      'ui',
      icon,
      size,
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, 'selected'),
      'rating',
      className,
    )
    const rest = getUnhandledProps(Rating, this.props)
    const ElementType = getElementType(Rating, this.props)

    return (
      <ElementType {...rest} className={classes} role='radiogroup' onMouseLeave={this.handleMouseLeave}>
        {_.times(maxRating, (i) => (
          <RatingIcon
            active={rating >= i + 1}
            index={i}
            key={i}
            aria-checked={rating === i + 1}
            aria-posinset={i + 1}
            aria-setsize={maxRating}
            onClick={this.handleIconClick}
            onMouseEnter={this.handleIconMouseEnter}
            selected={selectedIndex >= i && isSelecting }
          />
        ))}
      </ElementType>
    )
  }
}

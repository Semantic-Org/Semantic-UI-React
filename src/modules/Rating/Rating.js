import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'

const _meta = {
  name: 'Rating',
  type: META.TYPES.MODULE,
  props: {
    clearable: ['auto'],
    icon: ['star', 'heart'],
    size: _.without(SUI.SIZES, 'medium', 'big'),
  },
}

class Rating extends Component {
  static propTypes = {
    /** Additional className. */
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

    /** A rating can use a set of star or heart icons. */
    icon: PropTypes.oneOf(_meta.props.icon),

    /** The total number of icons. */
    maxRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** The current number of active icons. */
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** The initial rating value. */
    defaultRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** A progress bar can vary in size. */
    size: PropTypes.oneOf(_meta.props.size),

    /** You can disable or enable interactive rating.  Makes a read-only rating. */
    disabled: PropTypes.bool,

    /** Called with (event, { rating, maxRating }) after user selects a new rating. */
    onRate: PropTypes.func,
  }

  static defaultProps = {
    clearable: 'auto',
    maxRating: 1,
  }

  static _meta = _meta

  static autoControlledProps = [
    'rating',
  ]

  handleMouseLeave = (...args) => {
    _.invoke(this.props, 'onMouseLeave', ...args)

    if (this.props.disabled) return

    this.setState({ selectedIndex: -1, isSelecting: false })
  }

  handleIconMouseEnter = (index) => {
    if (this.props.disabled) return

    this.setState({ selectedIndex: index, isSelecting: true })
  }

  handleIconClick = (e, index) => {
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
    if (onRate) onRate(e, { rating: newRating, maxRating })
  }

  renderIcons = () => {
    const { maxRating } = this.props
    const { rating, selectedIndex, isSelecting } = this.state

    return _.times(maxRating, (i) => {
      const classes = cx(
        selectedIndex >= i && isSelecting && 'selected',
        rating >= i + 1 && 'active',
        'icon'
      )
      return (
        <i
          key={i}
          className={classes}
          onClick={(e) => this.handleIconClick(e, i)}
          onMouseEnter={() => this.handleIconMouseEnter(i)}
        />
      )
    })
  }

  render() {
    const { className, disabled, icon, size } = this.props
    const { selectedIndex, isSelecting } = this.state

    const classes = cx(
      'ui',
      size,
      icon,
      disabled && 'disabled',
      isSelecting && !disabled && selectedIndex >= 0 && 'selected',
      'rating',
      className,
    )

    const rest = getUnhandledProps(Rating, this.props)

    return (
      <div {...rest} className={classes} onMouseLeave={this.handleMouseLeave}>
        {this.renderIcons()}
      </div>
    )
  }
}

export default Rating

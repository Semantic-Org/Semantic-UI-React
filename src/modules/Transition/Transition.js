import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

const _meta = {
  name: 'Transition',
  type: META.TYPES.MODULE,
  props: {
    animation: ['fade', 'scale'],
  },
}

/**
 * A transition is an animation usually used to move content in or out of view.
 * */
export default class Transition extends Component {
  static autoControlledProps = [
    'active',
    'visible',
  ]

  static defaultProps = {
    animation: 'fade',
    duration: 500,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as.isRequired,

    active: PropTypes.bool,

    /** Named animation event to used. */
    animation: PropTypes.oneOf(_meta.props.animation),

    /** Additional classes. */
    className: PropTypes.string,

    defaultActive: PropTypes.bool,

    defaultVisible: PropTypes.bool,

    /** Duration of the CSS transition animation. */
    duration: PropTypes.number,

    visible: PropTypes.bool,
  }

  static _meta = _meta

  render() {
    const { animation, className, duration } = this.props
    const { active, visible } = this.props

    const classes = cx(
      animation,
      useKeyOnly(active, 'active'),
      useKeyOnly(!visible, 'hidden'),
      useKeyOnly(visible, 'visible'),
      'animating in transition',
      className,
    )
    const style = {
      animationDuration: `${duration}ms`,
    }
    const rest = getUnhandledProps(Transition, this.props)
    const ElementType = getElementType(Transition, this.props)

    return <ElementType {...rest} className={classes} style={style} />
  }
}

import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  META,
  customPropTypes,
  getUnhandledProps,
  getElementType
} from '../../lib'

const _meta = {
  name: 'Sidebar',
  type: META.TYPES.MODULE,
  props: {
    direction: ['top', 'right', 'bottom', 'left'],
    animation: ['overlay', 'push', 'scaleDown', 'uncover', 'slideOut', 'slideAlong'],
  },
}

class Sidebar extends Component {
  static _meta = _meta

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,
  }

  static autoControlledProps = [
    'visable',
  ]

  render() {
    const { className } = this.props

    const classes = cx(
      'ui',
      className
    )

    const rest = getUnhandledProps(Sidebar, this.props)
    const ElementType = getElementType(Sidebar, this.props)

    return <ElementType {...rest} className={classes}>Im going to be a Sidebar when I grow up!</ElementType>
  }
}

export default Sidebar

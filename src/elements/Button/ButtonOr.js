import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'

/**
 * Button groups can contain conditionals.
 */
const ButtonOr = React.forwardRef(function (props, ref) {
  const { className, text } = props

  const classes = cx('or', className)
  const rest = getUnhandledProps(ButtonOr, props)
  const ElementType = getComponentType(props)

  return <ElementType {...rest} className={classes} data-text={text} ref={ref} />
})

ButtonOr.displayName = 'ButtonOr'
ButtonOr.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default ButtonOr

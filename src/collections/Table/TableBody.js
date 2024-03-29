import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'

const TableBody = React.forwardRef(function (props, ref) {
  const { children, className } = props

  const classes = cx(className)
  const rest = getUnhandledProps(TableBody, props)
  const ElementType = getComponentType(props, { defaultAs: 'tbody' })

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {children}
    </ElementType>
  )
})

TableBody.displayName = 'TableBody'
TableBody.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default TableBody

import _ from 'lodash'
import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'

const TableBody = React.forwardRef(function (partialProps, ref) {
  const props = _.defaults(partialProps, getDefaultProps())
  const { children, className } = props
  const classes = cx(className)
  const rest = getUnhandledProps(TableBody, props)
  const ElementType = getElementType(TableBody, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {children}
    </ElementType>
  )
})

TableBody.displayName = 'TableBody'
function getDefaultProps() {
  return {
    as: 'tbody',
  }
}

TableBody.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default TableBody

import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function Description(props) {
  const {
    children, className, ...rest,
    } = props

  const classes = cx(
    'description',
    className
  )

  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

Description._meta = {
  library: META.library.semanticUI,
  name: 'Description',
  type: META.type.element,
}

Description.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the list className. */
  className: PropTypes.string,
}

export default Description

import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function Content(props) {
  const {
    children, className, ...rest,
    } = props

  const classes = cx(
    'content',
    className
  )

  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

Content._meta = {
  name: 'Content',
  type: META.type.element,
}

Content.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the list className. */
  className: PropTypes.string,
}

export default Content

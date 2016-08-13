import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getUnhandledProps, META } from '../../lib'

function ModalDescription(props) {
  const { children, className } = props

  const classes = cx(
    className,
    'description'
  )

  const rest = getUnhandledProps(ModalDescription, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalDescription.propTypes = {
  /** Primary content */
  children: PropTypes.any,

  /** Classes to add to the className */
  className: PropTypes.string,
}

export default ModalDescription

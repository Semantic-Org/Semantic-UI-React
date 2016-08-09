import React, { PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function ModalHeader(props) {
  const { children, className } = props

  const classes = classNames(
    className,
    'header'
  )

  const rest = getUnhandledProps(ModalHeader, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ModalHeader._meta = {
  name: 'ModalHeader',
  type: META.type.module,
  parent: 'Modal',
}

ModalHeader.propTypes = {
  /** Primary content of the modal header */
  children: PropTypes.any,

  /** Classes to add to the modal header className */
  className: PropTypes.string,
}

export default ModalHeader

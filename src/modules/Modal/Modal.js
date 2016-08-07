import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import {
  getUnhandledProps,
  useKeyOnly,
} from '../../utils/propUtils'

function Modal(props) {
  const {
    children, className,
    active, basic, size,
  } = props

  const classes = cx('ui',
    useKeyOnly(active, 'transition visible active'),
    useKeyOnly(basic, 'basic'),
    size,
    'modal',
    className,
  )

  const rest = getUnhandledProps(Modal, props)

  return (
    <div className={classes} {...rest} >
      {children}
    </div>
  )
}

Modal._meta = {
  name: 'Modal',
  type: META.type.module,
  props: {
    size: ['fullscreen', 'large', 'small'],
  },
}

Modal.propTypes = {
  /** Primary content of the modal. Consider using ModalHeader, ModalContent or ModalActions here */
  children: PropTypes.any,

  /** Classes to add to the modal className */
  className: PropTypes.string,

  /** An active modal is visible on the page */
  active: PropTypes.bool,

  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(Modal._meta.props.size),
}

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Actions = ModalActions

export default Modal

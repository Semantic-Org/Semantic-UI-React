import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
} from '../../utils/propUtils'

function HeaderSubheader(props) {
  const {
    children, className,
  } = props

  const classes = cx('sd-header-subheader', 'sub',
    className,
    'header'
  )

  const SubHeaderComponent = 'div'
  const rest = getUnhandledProps(HeaderSubheader, props)

  return (
    <SubHeaderComponent className={classes} {...rest}>
      {children}
    </SubHeaderComponent>
  )
}

HeaderSubheader._meta = {
  library: META.library.semanticUI,
  name: 'HeaderSubheader',
  parent: 'Header',
  type: META.type.element,
}

HeaderSubheader.propTypes = {
  /** Primary content of the HeaderSubheader */
  children: PropTypes.node,

  /** Classes to add to the subheader className. */
  className: PropTypes.string,
}

export default HeaderSubheader

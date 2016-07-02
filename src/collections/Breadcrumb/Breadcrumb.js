import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from 'src/utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function Breadcrumb(props) {
  const {
    children,
    size,
  } = props

  const classes = cx(
    'ui',
    size,
    'breadcrumb'
  )

  const rest = getUnhandledProps(Breadcrumb, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Breadcrumb._meta = {
  library: META.library.semanticUI,
  name: 'Breadcrumb',
  type: META.type.collection,
  props: {
    size: sui.sizes,
  },
}

Breadcrumb.propTypes = {
  /** Primary content of the Container */
  children: PropTypes.node,

  /** Size of breadcrumb */
  size: PropTypes.oneOf(Breadcrumb._meta.props.size),
}

export default Breadcrumb

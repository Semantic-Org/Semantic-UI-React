import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from 'src/utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import BreadcrumbSection from './BreadcrumbSection'

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
  /** Primary content of the Breadcrumb */
  children: PropTypes.node,

  /** Size of Breadcrumb */
  size: PropTypes.oneOf(Breadcrumb._meta.props.size),
}

Breadcrumb.Section = BreadcrumbSection

export default Breadcrumb

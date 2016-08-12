import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'

function CardHeader(props) {
  const { className, children, header, ...rest } = props
  const classes = cx(className, 'header')

  return <div {...rest} className={classes}>{children || header}</div>
}

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META.type.view,
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['header']),
    PropTypes.node,
  ]),
  header: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default CardHeader

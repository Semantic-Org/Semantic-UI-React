import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'

function CardMeta(props) {
  const { className, children, meta, ...rest } = props
  const classes = cx(className, 'meta')

  return <div {...rest} className={classes}>{children || meta}</div>
}

CardMeta._meta = {
  name: 'CardMeta',
  parent: 'Card',
  type: META.type.view,
}

CardMeta.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['meta']),
    PropTypes.node,
  ]),
  meta: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default CardMeta

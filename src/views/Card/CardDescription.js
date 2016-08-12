import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'

function CardDescription(props) {
  const { className, children, description, ...rest } = props
  const classes = cx(className, 'description')

  return <div {...rest} className={classes}>{ children || description }</div>
}

CardDescription._meta = {
  name: 'CardDescription',
  parent: 'Card',
  type: META.type.view,
}

CardDescription.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description']),
    PropTypes.node,
  ]),
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default CardDescription

import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  META,
} from '../../lib'

function CardDescription(props) {
  const { className, children, content, ...rest } = props
  const classes = cx(className, 'description')

  return <div {...rest} className={classes}>{ children || content }</div>
}

CardDescription._meta = {
  name: 'CardDescription',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardDescription.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.every([
    customPropTypes.disallow(['description']),
    PropTypes.node,
  ]),
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardDescription

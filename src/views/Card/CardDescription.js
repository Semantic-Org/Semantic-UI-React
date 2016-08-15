import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function CardDescription(props) {
  const { className, children, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(CardDescription, props)

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

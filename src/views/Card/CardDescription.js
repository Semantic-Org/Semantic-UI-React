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
  /** Primary content of the CardDescription. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardDescription className. */
  className: PropTypes.string,

  /** Primary content of the CardDescription. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardDescription

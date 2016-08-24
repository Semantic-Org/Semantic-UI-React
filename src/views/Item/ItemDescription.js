import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function ItemDescription(props) {
  const { children, className, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(ItemDescription, props)

  return <div {...rest} className={classes}>{children || content}</div>
}

ItemDescription._meta = {
  name: 'ItemDescription',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemDescription.propTypes = {
  /** Primary content of the ItemDescription. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemDescription className. */
  className: PropTypes.string,

  /** Primary content of the ItemDescription. Mutually exclusive with the children prop. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default ItemDescription

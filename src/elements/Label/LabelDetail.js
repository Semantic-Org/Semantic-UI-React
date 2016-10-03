import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function LabelDetail(props) {
  const { children, className, content } = props
  const classes = cx('detail', className)
  const ElementType = getElementType(LabelDetail, props)
  const rest = getUnhandledProps(LabelDetail, props)

  return <ElementType className={classes} {...rest}>{ children || content }</ElementType>
}

LabelDetail._meta = {
  name: 'LabelDetail',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
}

LabelDetail.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the detail. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the detail. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.string,
  ]),
}

export default LabelDetail

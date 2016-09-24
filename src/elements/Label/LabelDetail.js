import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function LabelDetail(props) {
  const { children, className, content } = props
  const classes = cx(className, 'detail')
  const rest = getUnhandledProps(LabelDetail, props)
  const ElementType = getElementType(LabelDetail, props)

  return <ElementType className={classes} {...rest}>{ children || content }</ElementType>
}

LabelDetail._meta = {
  name: 'LabelDetail',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
}

LabelDetail.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the label. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the label. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.string,
  ]),
}

export default LabelDetail

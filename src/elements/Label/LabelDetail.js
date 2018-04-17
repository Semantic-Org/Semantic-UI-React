import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createComponent,
  customPropTypes,
  META,
} from '../../lib'

import variables from './labelVariables'
import * as rules from './labelRules'

function LabelDetail(props) {
  const { children, className, content, ElementType, rest, styles } = props
  const classes = cx(styles.__detail, className)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

LabelDetail._meta = {
  name: 'LabelDetail',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
}

LabelDetail.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  ElementType: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  rest: PropTypes.object,

  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default createComponent({
  Component: LabelDetail,
  shorthand: val => ({ content: val }),
  rules,
  variables,
})

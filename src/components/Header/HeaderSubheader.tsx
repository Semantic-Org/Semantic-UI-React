import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenExist,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  createComponent,
} from '../../lib'

import headerSubheaderRules from './headerSubheaderRules'

/**
 * Headers may contain subheaders.
 */
const HeaderSubheader: any = props => {
  const { children, className, content, styles } = props
  const classes = cx('ui-header__subheader', styles.root, className)
  const rest = getUnhandledProps(HeaderSubheader, props)
  const ElementType = getElementType(HeaderSubheader, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

HeaderSubheader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  styles: PropTypes.object,
}

HeaderSubheader.handledProps = ['as', 'children', 'className', 'content', 'styles']

export default createComponent(HeaderSubheader, {
  rules: headerSubheaderRules,
  shorthand: content => ({ content }),
})

import PropTypes from 'prop-types'
import React from 'react'

import { childrenExist, createShorthandFactory, customPropTypes, UIComponent } from '../../lib'

import headerSubheaderRules from './headerSubheaderRules'

/**
 * Headers may contain subheaders.
 */
class HeaderSubheader extends UIComponent<any, any> {
  static create: Function

  static className = 'ui-header__subheader'

  static displayName = 'HeaderSubheader'

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,
  }

  static handledProps = ['as', 'children', 'className', 'content']

  static rules = headerSubheaderRules

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props
    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

HeaderSubheader.create = createShorthandFactory(HeaderSubheader, content => ({ content }))

export default HeaderSubheader

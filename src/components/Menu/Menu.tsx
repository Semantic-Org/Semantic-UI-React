import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { createComponent, customPropTypes, getElementType, getUnhandledProps } from '../../lib'
import MenuItem from './MenuItem'
import menuRules from './menuRules'

class Menu extends React.Component<any, any> {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** FELA styles */
    styles: PropTypes.object,
  }

  static Item = MenuItem

  static handledProps = ['as', 'children', 'className', 'styles']

  render() {
    const { children, className, styles } = this.props

    const classes = cx('ui-menu', styles.root, className)
    const ElementType = getElementType(Menu, this.props, () => 'ul')
    const rest = getUnhandledProps(Menu, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }
}

export default createComponent(Menu, {
  rules: menuRules,
})

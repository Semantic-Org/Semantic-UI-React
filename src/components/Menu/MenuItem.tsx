import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenExist,
  createComponent,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import menuItemRules from './menuItemRules'

class MenuItem extends React.Component<any, {}> {
  static propTypes = {
    /** A menu item can be active. */
    active: PropTypes.bool,

    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /**
     * Called on click. When passed, the component will render as an `a`
     * tag by default instead of a `div`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** FELA styles */
    styles: PropTypes.object,
  }

  static handledProps = ['active', 'as', 'children', 'className', 'content', 'onClick', 'styles']

  handleClick = e => {
    _.invoke(this.props, 'onClick', e, this.props)
  }

  render() {
    const { children, className, content, onClick, styles } = this.props

    const classes = cx('ui-menu__item', styles.root, className)
    const anchorClasses = cx('ui-menu__item__anchor', styles.anchor)
    const ElementType = getElementType(MenuItem, this.props, () => 'li')
    const rest = getUnhandledProps(MenuItem, this.props)

    if (childrenExist(children)) {
      return (
        <ElementType {...rest} className={classes} onClick={this.handleClick}>
          {children}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        <a className={anchorClasses}>{content}</a>
      </ElementType>
    )
  }
}

export default createComponent(MenuItem, {
  rules: menuItemRules,
})

import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  createComponent,
  getElementType,
  getUnhandledProps,
  childrenExist,
} from '../../lib'
import labelRules from './labelRules'
import labelVariables from './labelVariables'

/**
 * A label displays content classification
 */
const Label: any = props => {
  const ElementType = getElementType(Label, props)
  const rest = getUnhandledProps(Label, props)
  const { content, styles, children, className } = props

  const handleClick = e => {
    const { onClick } = props
    if (onClick) {
      onClick(e, props)
    }
  }

  return (
    <ElementType {...rest} className={cx('ui-label', styles.root, className)} onClick={handleClick}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

Label.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** A label can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  styles: PropTypes.object,
}

Label.handledProps = ['as', 'children', 'circular', 'className', 'content', 'onClick', 'styles']

Label.defaultProps = {
  as: 'label',
}

export default createComponent(Label, {
  rules: labelRules,
  variables: labelVariables,
})

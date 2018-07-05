import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  createComponent,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  childrenExist,
} from '../../lib'
import accordionContentRules from './accordionContentRules'
import accordionContentVariables from './accordionContentVariables'

/**
 * A standard AccordionContent.
 */
const AccordionContent: any = (props: any) => {
  const ElementType = getElementType(AccordionContent, props)
  const rest = getUnhandledProps(AccordionContent, props)
  const { active, children, className, content, styles } = props
  const classes = cx(useKeyOnly(active, 'active'), 'ui-accordionContent', styles.root, className)

  return (
    <ElementType {...rest} className={classes}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

AccordionContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A bunch of styles we might not need. */
  styles: PropTypes.object,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,
}

AccordionContent.handledProps = ['as', 'className', 'styles', 'onClick']

AccordionContent.defaultProps = {
  as: 'accordionContent',
}

export default createComponent(AccordionContent, {
  rules: accordionContentRules,
  variables: accordionContentVariables,
  shorthand: content => ({ content }),
})

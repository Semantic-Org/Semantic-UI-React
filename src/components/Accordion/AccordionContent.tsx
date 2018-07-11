import PropTypes from 'prop-types'
import React from 'react'

import { childrenExist, createShorthandFactory, customPropTypes, UIComponent } from '../../lib'
import accordionContentRules from './accordionContentRules'
import accordionContentVariables from './accordionContentVariables'

/**
 * A standard AccordionContent.
 */
class AccordionContent extends UIComponent<any, any> {
  static displayName = 'AccordionContent'

  static create: Function

  static className = 'ui-accordion__content'

  static propTypes = {
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

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,
  }

  static handledProps = ['as', 'active', 'children', 'className', 'content', 'onClick']

  static rules = accordionContentRules

  static variables = accordionContentVariables

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props

    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

AccordionContent.create = createShorthandFactory(AccordionContent, content => ({ content }))

export default AccordionContent

import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenExist, createShorthandFactory, customPropTypes, UIComponent } from '../../lib'
import accordionTitleRules from './accordionTitleRules'

/**
 * A standard AccordionTitle.
 */
class AccordionTitle extends UIComponent<any, any> {
  static displayName = 'AccordionTitle'

  static create: Function

  static className = 'ui-accordion__title'

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Whether or not the title is in the open state. */
    active: PropTypes.bool,

    /** Child content * */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** AccordionTitle index inside Accordion. */
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,
  }

  static handledProps = ['as', 'active', 'children', 'className', 'content', 'index', 'onClick']

  static rules = accordionTitleRules

  handleClick = e => {
    _.invoke(this.props, 'onClick', e, this.props)
  }

  renderComponent({ ElementType, classes, rest }) {
    const { active, children, content } = this.props

    if (childrenExist(children)) {
      return (
        <ElementType {...rest} className={classes.root} onClick={this.handleClick}>
          {children}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes.root} onClick={this.handleClick}>
        {active ? <span>&#9660;</span> : <span>&#9654;</span>}
        {content}
      </ElementType>
    )
  }
}

AccordionTitle.create = createShorthandFactory(AccordionTitle, content => ({ content }))

export default AccordionTitle

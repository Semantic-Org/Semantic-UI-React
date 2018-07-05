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
} from '../../lib'
import accordionTitleRules from './accordionTitleRules'

/**
 * A standard AccordionTitle.
 */
class AccordionTitle extends React.Component<any, any> {
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

    /** A bunch of styles we might not need. */
    styles: PropTypes.object,
  }

  static handledProps = ['as', 'className', 'styles', 'onClick']
  static defaultProps = {
    as: 'accordionTitle',
  }

  handleClick = e => {
    _.invoke(this.props, 'onClick', e, this.props)
  }

  render() {
    const { active, children, styles, className, content } = this.props

    const ElementType = getElementType(AccordionTitle, this.props)
    const rest = getUnhandledProps(AccordionTitle, this.props)
    const classes = cx(useKeyOnly(active, 'active'), 'ui-accordionTitle', styles.root, className)

    if (_.isNil(content)) {
      return (
        <ElementType {...rest} className={classes} onClick={this.handleClick}>
          {children}
        </ElementType>
      )
    }

    return active ? (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        <span>&#9660;</span> {content}
      </ElementType>
    ) : (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        <span>&#9654;</span> {content}
      </ElementType>
    )
  }
}

export default createComponent(AccordionTitle, {
  rules: accordionTitleRules,
  shorthand: content => ({ content }),
})

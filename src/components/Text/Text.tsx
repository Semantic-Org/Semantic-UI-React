import PropTypes from 'prop-types'
import React from 'react'

import { childrenExist, customPropTypes, UIComponent } from '../../lib'
import textRules from './textRules'

/**
 * A component containing text
 */
class Text extends UIComponent<any, any> {
  static className = 'ui-text'

  static propTypes = {
    /** Change the default element type of the Text component */
    as: customPropTypes.as,

    /** Set as @mention Text component */
    atMention: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Set as disabled Text component */
    disabled: PropTypes.bool,

    /** Set as error Text component */
    error: PropTypes.bool,

    /** The size for the Text component */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2x', '3x', '4x']),

    /** Set as success Text component */
    success: PropTypes.bool,

    /** Set as timestamp Text component */
    timestamp: PropTypes.bool,
  }

  static defaultProps = {
    as: 'span',
  }

  static handledProps = [
    'as',
    'atMention',
    'className',
    'content',
    'disabled',
    'error',
    'size',
    'success',
    'timestamp',
  ]

  static rules = textRules

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props
    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

export default Text

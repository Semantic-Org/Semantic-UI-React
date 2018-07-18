import React from 'react'
import PropTypes from 'prop-types'
import { customPropTypes, UIComponent, SUI } from '../../lib'

import iconRules from './iconRules'
import iconVariables from './iconVariables'

class Icon extends UIComponent<any, any> {
  static className = 'ui-icon'

  static displayName = 'Icon'

  static variables = iconVariables

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Icon can appear with rectangular border. */
    bordered: PropTypes.bool,

    /** Icon can appear as circular. */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Color of the icon. */
    color: PropTypes.oneOf([
      'white',
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black',
    ]),

    /** The type of font that needs to be used */
    kind: PropTypes.string,

    /** Name of the icon. */
    name: customPropTypes.suggest(SUI.ALL_ICONS_IN_ALL_CONTEXTS),

    /** Size of the icon. */
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
  }

  static handledProps = ['as', 'bordered', 'circular', 'className', 'color', 'kind', 'name', 'size']

  static defaultProps = {
    as: 'i',
    kind: 'FontAwesome',
  }

  static rules = iconRules

  renderComponent({ ElementType, classes, rest }) {
    return <ElementType className={classes.root} {...rest} />
  }
}

export default Icon

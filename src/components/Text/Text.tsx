import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import textRules from './textRules'

import { createComponent, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A component containing text
 */
const Text: any = (props: any) => {
  const ElementType = getElementType(Text, props)
  const rest = getUnhandledProps(Text, props)
  const { className, styles } = props

  return <ElementType {...rest} className={cx('ui-text', styles.root, className)} />
}

Text.defaultProps = {
  as: 'span',
}

Text.propTypes = {
  /** Change the default element type of the Text component */
  as: customPropTypes.as,

  /** Set as @mention Text component */
  atMention: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** The text content for the Text component. */
  content: PropTypes.string,

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

export default createComponent(Text, {
  rules: textRules,
})

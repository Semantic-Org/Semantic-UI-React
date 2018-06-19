import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

import { customPropTypes, createComponent, getElementType, getUnhandledProps } from '../../lib'
import imageRules from './imageRules'
import imageVariables from './imageVariables'

/**
 * An image is a graphic representation of something.
 */
const Image = (props) => {
  const ElementType = getElementType(Image, props)
  const rest = getUnhandledProps(Image, props)
  const { styles, className } = props

  return <ElementType {...rest} className={cx('ui-image', styles.root, className)} />
}

Image.propTypes = {
  /**  */
  as: customPropTypes.as,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: PropTypes.bool,

  /** An image can appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** TODO: this is not a prop we want here... */
  styles: PropTypes.object,
}

Image.defaultProps = {
  as: 'img',
}

export default createComponent(Image, {
  rules: imageRules,
  variables: imageVariables,
})

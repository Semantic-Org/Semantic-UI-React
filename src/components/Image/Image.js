import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'

import { customPropTypes, createComponent, getElementType, getUnhandledProps } from '../../lib'

import imageRules from './imageRules'
import imageVariables from './imageVariables'

/**
 * An image is a graphic representation of something.
 */
class Image extends Component {
  static propTypes = {
    /**  */
    as: customPropTypes.as,

    /** An image may be formatted to appear inline with text as an avatar. */
    avatar: PropTypes.bool,

    /** An image can appear circular. */
    circular: PropTypes.bool,

    /** TODO: this is not a prop we want here... */
    styles: PropTypes.object,
  }

  static defaultProps = {
    as: 'img',
  }

  // TODO: _meta should be part of a component's doc block
  static _meta = {
    name: 'Image',
    type: 'component',
  }

  render() {
    const ElementType = getElementType(Image, this.props)
    const rest = getUnhandledProps(Image, this.props)
    const { styles } = this.props

    return <ElementType {...rest} className={cx('ui-image', styles.root)} />
  }
}

export default createComponent(Image, {
  rules: imageRules,
  variables: imageVariables,
})

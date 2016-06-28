import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class Image extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Image',
    type: META.type.element,
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'image'
    )

    return <img {...this.props} className={classes} />
  }
}

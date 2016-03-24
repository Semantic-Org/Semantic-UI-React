import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Icon',
    type: META.type.element,
  }

  render() {
    const { className } = this.props
    const classes = cx(
      'sd-icon',
      className,
      'icon',
    )
    return (
      <i {...this.props} className={classes} />
    )
  }
}

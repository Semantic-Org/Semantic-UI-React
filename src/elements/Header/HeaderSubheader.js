import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import getUnhandledProps from '../../utils/getUnhandledProps'

export default class HeaderSubheader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };
  static _meta = {
    library: META.library.semanticUI,
    name: 'HeaderSubheader',
    type: META.type.element,
  };
  render() {
    const classes = classNames(
      'sd-header-subheader',
      'sub',
      this.props.className,
      'header',
    )

    const props = getUnhandledProps(this)

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}

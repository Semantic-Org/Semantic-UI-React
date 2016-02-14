import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

export default class HeaderH3 extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'HeaderH3',
    type: META.type.element,
  };

  render() {
    const classes = cx(
      'sd-header-h3',
      'ui',
      this.props.className,
      'header'
    )
    return (
      <_Header {...this.props} className={classes} _headerElement='h3' />
    )
  }
}

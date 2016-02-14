import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

export default class HeaderH2 extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'HeaderH2',
    type: META.type.element,
  };

  render() {
    const classes = cx(
      'sd-header-h2',
      'ui',
      this.props.className,
      'header'
    )
    return (
      <_Header {...this.props} className={classes} _headerElement='h2' />
    )
  }
}

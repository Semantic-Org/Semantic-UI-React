import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import _Header from './_Header'
import HeaderH1 from './HeaderH1'
import HeaderH2 from './HeaderH2'
import HeaderH3 from './HeaderH3'
import HeaderH4 from './HeaderH4'
import HeaderH5 from './HeaderH5'
import HeaderH6 from './HeaderH6'
import HeaderSubheader from './HeaderSubheader'

export default class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Header',
    type: META.type.element,
  };

  static H1 = HeaderH1;
  static H2 = HeaderH2;
  static H3 = HeaderH3;
  static H4 = HeaderH4;
  static H5 = HeaderH5;
  static H6 = HeaderH6;
  static Subheader = HeaderSubheader;

  render() {
    const classes = cx(
      'sd-header',
      'ui',
      this.props.className,
      'header'
    )
    return (
      <_Header {...this.props} className={classes} _headerElement='div' />
    )
  }
}

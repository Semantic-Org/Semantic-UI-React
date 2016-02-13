import React, { Component } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'
import HeaderH1 from './HeaderH1'
import HeaderH2 from './HeaderH2'
import HeaderH3 from './HeaderH3'
import HeaderH4 from './HeaderH4'
import HeaderH5 from './HeaderH5'
import HeaderH6 from './HeaderH6'
import Subheader from './Subheader'

export default class Header extends Component {
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
  static Subheader = Subheader;
  render() {
    return (
      <_Header {...this.props} _headerElement='div'/>
    )
  }
}

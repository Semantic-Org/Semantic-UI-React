import React, { Component } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import Subheader from './Subheader'

export default class Header extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'Header',
    type: META.type.element,
  };
  static H1 = H1;
  static H2 = H2;
  static H3 = H3;
  static H4 = H4;
  static H5 = H5;
  static H6 = H6;
  static Subheader = Subheader;
  render() {
    return (
      <_Header {...this.props} _headerElement='div'/>
    )
  }
}

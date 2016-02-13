import React, { Component } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

export default class HeaderH1 extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'H1',
    type: META.type.element,
  };

  render() {
    return (
      <_Header {...this.props} _headerElement='h1'/>
    )
  }
}

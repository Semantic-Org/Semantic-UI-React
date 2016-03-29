import React, { Component } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

export default class HeaderH3 extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'HeaderH3',
    parent: 'Header',
    type: META.type.element,
  }

  render() {
    return (
      <_Header {...this.props} _sdClass='sd-header-h3' _headerElement='h3' />
    )
  }
}

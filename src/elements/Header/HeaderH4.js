import React, { Component } from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

export default class HeaderH4 extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'HeaderH4',
    parent: 'Header',
    type: META.type.element,
  }

  render() {
    return (
      <_Header {...this.props} _sdClass='sd-header-h4' _headerElement='h4' />
    )
  }
}

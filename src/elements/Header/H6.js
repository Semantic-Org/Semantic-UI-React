import React, {Component} from 'react';
import META from 'src/utils/Meta';
import _Header from './_Header';

export default class H6 extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'H6',
    type: META.type.element,
  };

  render() {
    return (
      <_Header {...this.props} _headerElement='h6'/>
    );
  }
}

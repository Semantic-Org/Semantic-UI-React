import React, {Component} from 'react';
import META from 'src/utils/Meta';
import _Header from './_Header';
import H1 from './H1';

export default class Header extends Component {
  static _meta = {
    library: META.library.semanticUI,
    name: 'Header',
    type: META.type.element,
  };

  static H1 = H1;

  render() {
    return (
      <_Header {...this.props} _headerElement='div'/>
    );
  }
}

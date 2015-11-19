import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderPageHeadersExamples extends Component {
  render() {
    return (
      <div>
        <Header.H1>
          First Header
        </Header.H1>
        <Header.H2>
          Second Header
        </Header.H2>
        <Header.H3>
          Third Header
        </Header.H3>
        <Header.H4>
          Fourth Header
        </Header.H4>
        <Header.H5>
          Fifth Header
        </Header.H5>
        <Header.H6>
          Sixth Header
        </Header.H6>
      </div>
    );
  }
}

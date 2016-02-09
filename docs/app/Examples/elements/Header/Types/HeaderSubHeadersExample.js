import React, { Component } from 'react'
import { Header } from 'stardust'

export default class HeaderSubHeadersExamples extends Component {
  render() {
    return (
      <Header.H2 className='sub'>
        Price
        <Header.Subheader>
          $10.99
        </Header.Subheader>
      </Header.H2>
    )
  }
}

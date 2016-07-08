import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbPropExample extends Component {

  sections = [
    { text: 'Home', link: true },
    { text: 'Store', link: true },
    { text: 'T-Shirt', active: true },
  ];

  render() {
    return (
      <Breadcrumb icon='right angle' sections={this.sections} />
    )
  }
}

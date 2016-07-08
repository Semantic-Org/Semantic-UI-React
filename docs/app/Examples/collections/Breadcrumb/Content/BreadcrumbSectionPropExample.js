import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbSectionPropExample extends Component {

  sections = [
    { text: 'Home', link: true },
    { text: 'Search', active: true },
  ];

  render() {
    return (
      <Breadcrumb sections={this.sections} />
    )
  }
}

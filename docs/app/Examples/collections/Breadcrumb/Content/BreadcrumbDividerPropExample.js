import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbDividerPropExample extends Component {

  sections = [
    { text: 'Home', link: true },
    { text: 'Registration', link: true },
    { text: 'Personal Information', active: true },
  ];

  render() {
    return (
      <Breadcrumb divider='/' sections={this.sections} />
    )
  }
}

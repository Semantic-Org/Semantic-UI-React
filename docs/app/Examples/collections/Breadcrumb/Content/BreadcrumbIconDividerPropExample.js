import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbIconDividerPropExample extends Component {

  sections = [
    { text: 'Home', link: true },
    { text: 'Registration', link: true },
    { text: 'Personal Information', active: true },
  ];

  render() {
    return (
      <Breadcrumb icon='right-angle' sections={this.sections} />
    )
  }
}

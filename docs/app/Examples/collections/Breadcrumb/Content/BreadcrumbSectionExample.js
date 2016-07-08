import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbSectionExample extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Search</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}

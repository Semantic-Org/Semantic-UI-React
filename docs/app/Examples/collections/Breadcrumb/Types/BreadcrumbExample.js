import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbExample extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}

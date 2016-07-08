import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbDividerExample extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}

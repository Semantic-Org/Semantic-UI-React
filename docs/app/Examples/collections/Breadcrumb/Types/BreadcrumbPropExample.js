import React from 'react'
import { Breadcrumb } from 'stardust'

const sections = [
  { text: 'Home', link: true },
  { text: 'Store', link: true },
  { text: 'T-Shirt', active: true },
]

const BreadcrumbPropExample = () => (
  <Breadcrumb icon='right angle' sections={sections} />
)

export default BreadcrumbPropExample

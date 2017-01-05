import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { content: 'Home', link: true },
  { content: 'Store', link: true },
  { content: 'T-Shirt', active: true },
]

const BreadcrumbExampleProps = () => (
  <Breadcrumb icon='right angle' sections={sections} />
)

export default BreadcrumbExampleProps

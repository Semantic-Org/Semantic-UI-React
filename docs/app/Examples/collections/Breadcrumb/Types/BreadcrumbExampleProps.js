import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'Store', link: true },
  { key: 'Shirt', content: 'T-Shirt', active: true },
]

const BreadcrumbExampleProps = () => (
  <Breadcrumb icon='right angle' sections={sections} />
)

export default BreadcrumbExampleProps

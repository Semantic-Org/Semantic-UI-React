import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { content: 'Home', link: true },
  { content: 'Registration', link: true },
  { content: 'Personal Information', active: true },
]

const BreadcrumbExampleIconDividerProps = () => (
  <Breadcrumb divider='/' sections={sections} />
)

export default BreadcrumbExampleIconDividerProps

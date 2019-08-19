import React from 'react'
import { Dropdown, Header } from 'semantic-ui-react'

const options = [
  {
    key: 1,
    text: 'Mobile',
    value: 1,
    content: (
      <Header icon='mobile' content='Mobile' subheader='The smallest size' />
    ),
  },
  {
    key: 2,
    text: 'Tablet',
    value: 2,
    content: (
      <Header
        icon='tablet'
        content='Tablet'
        subheader='The size in the middle'
      />
    ),
  },
  {
    key: 3,
    text: 'Desktop',
    value: 3,
    content: (
      <Header icon='desktop' content='Desktop' subheader='The largest size' />
    ),
  },
]

const DropdownExampleItemContent = () => (
  <Dropdown selection fluid options={options} placeholder='Choose an option' />
)

export default DropdownExampleItemContent

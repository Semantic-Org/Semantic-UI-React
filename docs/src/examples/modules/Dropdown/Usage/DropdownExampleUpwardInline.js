import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 's', text: 'small', value: 's' },
  { key: 'm', text: 'medium', value: 'm' },
  { key: 'l', text: 'large', value: 'l' },
]

const DropdownExampleUpwardInline = () => (
  <div>
    I'd like a size{' '}
    <Dropdown upward floating inline options={options} defaultValue='m' />{' '}
    T-shirt, please.
  </div>
)

export default DropdownExampleUpwardInline

import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const items = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

const InputExampleRightLabeled = () => (
  <Input
    label={<Dropdown defaultValue='.com' items={items} />}
    labelPosition='right'
    placeholder='Find domain'
  />
)

export default InputExampleRightLabeled

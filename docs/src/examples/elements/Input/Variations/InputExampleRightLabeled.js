import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

const InputExampleRightLabeled = () => (
  <Input
    label={<Dropdown defaultValue='.com' options={options} />}
    labelPosition='right'
    placeholder='Find domain'
  />
)

export default InputExampleRightLabeled

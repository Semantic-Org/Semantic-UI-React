import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { text: '.com', value: '.com' },
  { text: '.net', value: '.net' },
  { text: '.org', value: '.org' },
]

const InputExampleRightLabeled = () => (
  <Input
    label={<Dropdown defaultValue='.com' options={options} />}
    labelPosition='right'
    placeholder='Find domain'
  />
)

export default InputExampleRightLabeled

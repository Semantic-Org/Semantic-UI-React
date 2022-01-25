import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioGroup() {
  const [value, setValue] = React.useState('this')
  const handleChange = (e, data) => setValue({ value: data.value })

  return (
    <Form>
      <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Choose this'
          name='checkboxRadioGroup'
          value='this'
          checked={value === 'this'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Or that'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  )
}

export default CheckboxExampleRadioGroup

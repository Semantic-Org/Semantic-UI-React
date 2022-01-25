import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioGroup() {
  const [value, setValue] = React.useState('this')

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
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Or that'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>
  )
}

export default CheckboxExampleRadioGroup

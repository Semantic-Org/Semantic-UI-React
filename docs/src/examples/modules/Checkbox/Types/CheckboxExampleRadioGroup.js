import React from 'react'
import { FormField, Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioGroup() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      <FormField>
        Selected value: <b>{value}</b>
      </FormField>
      <FormField>
        <Checkbox
          radio
          label='Choose this'
          name='checkboxRadioGroup'
          value='this'
          checked={value === 'this'}
          onChange={(e, data) => setValue(data.value)}
        />
      </FormField>
      <FormField>
        <Checkbox
          radio
          label='Or that'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={(e, data) => setValue(data.value)}
        />
      </FormField>
    </Form>
  )
}

export default CheckboxExampleRadioGroup

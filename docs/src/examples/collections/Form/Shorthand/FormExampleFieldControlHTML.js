import React from 'react'
import { FormGroup, FormField, Form } from 'semantic-ui-react'

const FormExampleFieldControlHTML = () => (
  <Form>
    <FormGroup widths='equal'>
      <FormField label='An HTML <input>' control='input' />
      <FormField label='An HTML <select>' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </FormField>
    </FormGroup>
    <FormGroup grouped>
      <label>HTML radios</label>
      <FormField
        label='This one'
        control='input'
        type='radio'
        name='htmlRadios'
      />
      <FormField
        label='That one'
        control='input'
        type='radio'
        name='htmlRadios'
      />
    </FormGroup>
    <FormGroup grouped>
      <label>HTML checkboxes</label>
      <FormField label='This one' control='input' type='checkbox' />
      <FormField label='That one' control='input' type='checkbox' />
    </FormGroup>
    <FormField label='An HTML <textarea>' control='textarea' rows='3' />
    <FormField label='An HTML <button>' control='button'>
      HTML Button
    </FormField>
  </Form>
)

export default FormExampleFieldControlHTML

import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleFieldControlHTML = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field label='An HTML <input>' control='input' />
      <Form.Field label='An HTML <select>' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </Form.Field>
    </Form.Group>
    <Form.Group grouped>
      <label>HTML radios</label>
      <Form.Field
        label='This one'
        control='input'
        type='radio'
        name='htmlRadios'
      />
      <Form.Field
        label='That one'
        control='input'
        type='radio'
        name='htmlRadios'
      />
    </Form.Group>
    <Form.Group grouped>
      <label>HTML checkboxes</label>
      <Form.Field label='This one' control='input' type='checkbox' />
      <Form.Field label='That one' control='input' type='checkbox' />
    </Form.Group>
    <Form.Field label='An HTML <textarea>' control='textarea' rows='3' />
    <Form.Field label='An HTML <button>' control='button'>
      HTML Button
    </Form.Field>
  </Form>
)

export default FormExampleFieldControlHTML

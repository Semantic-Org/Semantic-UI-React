import React from 'react'
import { FormGroup, FormField, Button, Divider, Form } from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const FormExampleSize = () => (
  <div>
    {sizes.map((size) => (
      <Form size={size} key={size}>
        <FormGroup widths='equal'>
          <FormField
            label='First name'
            control='input'
            placeholder='First name'
          />
          <FormField
            label='Last name'
            control='input'
            placeholder='Last name'
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
    ))}
  </div>
)
export default FormExampleSize

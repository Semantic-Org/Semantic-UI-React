import React from 'react'
import {
  FormInput,
  FormGroup,
  FormField,
  Accordion,
  Button,
  Form,
  Segment,
} from 'semantic-ui-react'

const panels = [
  {
    key: 'details',
    title: 'Optional Details',
    content: {
      as: FormInput,
      label: 'Maiden Name',
      placeholder: 'Maiden Name',
    },
  },
]

const AccordionExampleForm = () => (
  <Segment>
    <Form>
      <FormGroup widths={2}>
        <FormInput label='First Name' placeholder='First Name' />
        <FormInput label='Last Name' placeholder='Last Name' />
      </FormGroup>
      <Accordion as={FormField} panels={panels} />

      <Button secondary>Sign Up</Button>
    </Form>
  </Segment>
)

export default AccordionExampleForm

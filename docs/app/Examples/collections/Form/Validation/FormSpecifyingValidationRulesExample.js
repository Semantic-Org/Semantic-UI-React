import React from 'react'
import { Button, Checkbox, Dropdown, Field, Fields, Form, Input, Message } from 'stardust'

const fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  skills: ['minCount[2]', 'empty'],
  terms: 'checked',
}

const genderOptions = [
  { value: '', text: 'Gender' },
  { value: 'male', text: 'Male' },
  { value: 'female', text: 'Female' },
]

const skillsOptions = [
  { value: '', text: 'Select Skills' },
  { value: 'css', text: 'CSS' },
  { value: 'html', text: 'HTML' },
  { value: 'javascript', text: 'Javascript' },
]

const FormSpecifyingValidationRulesExample = (props) => (
  <Form className='segment' fields={fields}>
    <p>Tell Us About Yourself</p>
    <Fields evenlyDivided>
      <Field>
        <label>Name</label>
        <Input placeholder='First Name' name='name' type='text' />
      </Field>
      <Field label='Gender'>
        <Dropdown className='selection' name='gender' options={genderOptions} />
      </Field>
    </Fields>
    <Fields evenlyDivided>
      <Field label='Username'>
        <Input placeholder='Username' name='username' type='text' />
      </Field>
      <Field label='Password'>
        <Input type='password' name='password' />
      </Field>
    </Fields>
    <Field label='Skills'>
      <Dropdown className='selection multiple' name='skills' options={skillsOptions} />
    </Field>
    <Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Field>
    <Button className='blue submit'>Submit</Button>
    <Message className='error' />
  </Form>
)

export default FormSpecifyingValidationRulesExample

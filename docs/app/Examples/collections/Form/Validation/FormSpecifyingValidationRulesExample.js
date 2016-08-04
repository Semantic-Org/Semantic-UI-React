import React from 'react'
import { Button, Checkbox, Select, Form, Input, Message } from 'stardust'

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
    <Form.Fields evenlyDivided>
      <Form.Field>
        <label>Name</label>
        <Input placeholder='First Name' name='name' type='text' />
      </Form.Field>
      <Form.Field label='Gender'>
        <Select name='gender' options={genderOptions} />
      </Form.Field>
    </Form.Fields>
    <Form.Fields evenlyDivided>
      <Form.Field label='Username'>
        <Input placeholder='Username' name='username' type='text' />
      </Form.Field>
      <Form.Field label='Password'>
        <Input type='password' name='password' />
      </Form.Field>
    </Form.Fields>
    <Form.Field label='Skills'>
      <Select multiple name='skills' options={skillsOptions} />
    </Form.Field>
    <Form.Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Form.Field>
    <Button className='blue submit'>Submit</Button>
    <Message error />
  </Form>
)

export default FormSpecifyingValidationRulesExample

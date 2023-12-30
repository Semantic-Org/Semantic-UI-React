import React, { Component } from 'react'
import {
  FormGroup,
  FormField,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <FormGroup widths='equal'>
          <FormField
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <FormField
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <FormField
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </FormGroup>
        <FormGroup inline>
          <label>Quantity</label>
          <FormField
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <FormField
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <FormField
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormField
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
        <FormField
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <FormField control={Button}>Submit</FormField>
      </Form>
    )
  }
}

export default FormExampleFieldControl

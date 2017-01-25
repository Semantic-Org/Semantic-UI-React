import React, { Component } from 'react'

import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'

const genders = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const products = [
  { key: 'hat', text: 'Hat', value: 'hat' },
  { key: 'scarf', text: 'Scarf', value: 'scarf' },
  { key: 'jacket', text: 'Jacket', value: 'jacket' },
  { key: 't_shirt', text: 'T-Shirt', value: 't_shirt' },
  { key: 'gloves', text: 'Gloves', value: 'gloves' },
  { key: 'watch', text: 'Watch', value: 'watch' },
  { key: 'belt', text: 'Belt', value: 'belt' },
  { key: 'pants', text: 'Pants', value: 'pants' },
  { key: 'shoes', text: 'Shoes', value: 'shoes' },
  { key: 'socks', text: 'Socks', value: 'socks' },
]

class FormExampleOnSubmit extends Component {
  state = { formData: {} }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData })
  }

  render() {
    const { formData, value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input label='Name' name='name' placeholder='Name' />
          <Form.Select label='Gender' name='gender' options={genders} placeholder='Gender' />
        </Form.Group>
        <Form.Select label='Products' name='products' options={products} placeholder='Search...' search multiple />
        <Form.Group widths='2'>
          <Form.Field>
            <label>Plan</label>
            <Form.Group inline>
              <Form.Radio label='A' name='plan' value='a' checked={value === 'a'} onChange={this.handleChange} />
              <Form.Radio label='B' name='plan' value='b' checked={value === 'b'} onChange={this.handleChange} />
              <Form.Radio label='C' name='plan' value='c' checked={value === 'c'} onChange={this.handleChange} />
            </Form.Group>
          </Form.Field>
          <Form.Field>
            <label>Shipping Options</label>
            <Form.Group inline>
              <Form.Checkbox label='Expedite' name='shippingOptions' value='expedite' />
              <Form.Checkbox label='Gift Wrap' name='shippingOptions' value='giftWrap' />
              <Form.Checkbox label='C.O.D.' name='shippingOptions' value='cod' />
            </Form.Group>
          </Form.Field>
        </Form.Group>
        <Form.TextArea name='details' label='Details' placeholder='Anything else we should know?' rows='3' />
        <Form.Checkbox name='terms' label='I agree to the Terms and Conditions' />
        <Button primary type='submit'>Submit</Button>

        <Message>
          <pre>formData: {JSON.stringify(formData, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

export default FormExampleOnSubmit

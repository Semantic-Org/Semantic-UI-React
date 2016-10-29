import React, { Component } from 'react'

import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'

const genders = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const products = [
  { text: 'Hat', value: 'hat' },
  { text: 'Scarf', value: 'scarf' },
  { text: 'Jacket', value: 'jacket' },
  { text: 'T-Shirt', value: 't_shirt' },
  { text: 'Gloves', value: 'gloves' },
  { text: 'Watch', value: 'watch' },
  { text: 'Belt', value: 'belt' },
  { text: 'Pants', value: 'pants' },
  { text: 'Shoes', value: 'shoes' },
  { text: 'Socks', value: 'socks' },
]

class FormExampleOnSubmit extends Component {
  state = { serializedForm: {} }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
  }

  render() {
    const { serializedForm, value } = this.state
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
          <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

export default FormExampleOnSubmit

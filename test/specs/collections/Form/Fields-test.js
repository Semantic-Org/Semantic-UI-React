import faker from 'faker'
import React from 'react'

import { Form } from 'stardust'

describe('Fields', () => {
  it('evenlyDivided adds the word class for the number of child fields', () => {
    render(
      <Form.Fields evenlyDivided>
        <Form.Field />
        <Form.Field />
      </Form.Fields>
    )
      .findClass('two fields')
  })
  it('renders children', () => {
    const child = faker.hacker.phrase()
    render(<Form.Fields>{child}</Form.Fields>)
      .assertText(child)
  })
})

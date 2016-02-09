import React from 'react'
import { Item } from 'stardust'
import faker from 'faker'

describe('Item', () => {
  it('renders children', () => {
    const child = faker.hacker.phrase()
    render(<Item>{child}</Item>).assertText(child)
  })
})

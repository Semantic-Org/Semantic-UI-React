import React from 'react'
import { Icon } from 'stardust'

describe('Icon', () => {
  it('renders an <i /> element', () => {
    render(<Icon />)
      .findTag('i')
  })

  it('adds the "icon" class', () => {
    render(<Icon />)
      .findClass('icon')
  })
})

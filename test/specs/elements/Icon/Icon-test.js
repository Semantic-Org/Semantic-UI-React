import React from 'react'
import { Icon } from 'stardust'

describe('Icon', () => {
  it('renders an <i /> element', () => {
    deprecatedRender(<Icon />)
      .findTag('i')
  })

  it('adds the "icon" class', () => {
    deprecatedRender(<Icon />)
      .findClass('icon')
  })
})

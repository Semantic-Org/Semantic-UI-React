import React from 'react'
import { Progress } from 'stardust'

describe('Progress', () => {
  it('should be able to receive children', () => {
    render(
      <Progress>
        Child
      </Progress>
    ).assertText('Child')
  })

  it('should create a div with the class of bar', () => {
    render(<Progress />).findClass('bar')
  })
})

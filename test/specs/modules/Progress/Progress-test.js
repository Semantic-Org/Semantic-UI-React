import React from 'react'
import { Progress } from 'stardust'

describe('Progress', () => {
  it('should be able to receive children', () => {
    deprecatedRender(
      <Progress>
        Child
      </Progress>
    ).assertText('Child')
  })

  it('should create a div with the class of bar', () => {
    deprecatedRender(<Progress />).findClass('bar')
  })
})

import React from 'react'
import { Segment } from 'stardust'

describe('Segment', () => {
  it('does not have a heading', () => {
    deprecatedRender(<Segment />)
      .scryClass('sd-segment-heading')
      .should.have.length(0)
  })
  it('has a heading', () => {
    deprecatedRender(<Segment heading='This is a segment' />)
      .findClass('sd-segment-heading')
      .textContent
      .should.equal('This is a segment')
  })
  it('renders its children', () => {
    deprecatedRender(<Segment>Some text</Segment>)
      .assertText('Some text')
  })
})

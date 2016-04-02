import React from 'react'

import { Textarea } from 'stardust'
import * as common from '../commonTests'

describe('Textarea', () => {
  common.isConformant(Textarea)

  it('has a default value', () => {
    deprecatedRender(<Textarea defaultValue='Hello World' />)
      .findTag('textarea')
      .value.should.equal('Hello World')
  })
  it('has a name assigned', () => {
    deprecatedRender(<Textarea name='sample-post' />)
      .first()
      .props.name.should.equal('sample-post')
  })
  it('has assigned amount of rows', () => {
    deprecatedRender(<Textarea rows='6' />)
      .findTag('textarea')
      .getAttribute('rows')
      .should.equal('6')
  })
})

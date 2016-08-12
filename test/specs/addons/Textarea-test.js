import React from 'react'

import Textarea from 'src/addons/Textarea/Textarea'
import * as common from '../commonTests'

describe('Textarea', () => {
  common.isConformant(Textarea)

  it('accepts a default value', () => {
    const wrapper = mount(<Textarea defaultValue='Hello World' />)

    wrapper
      .should.have.have.exactly(1).descendants('textarea')

    wrapper
      .should.have.value('Hello World')
  })

  it('has a name assigned', () => {
    shallow(<Textarea name='sample-post' />)
      .should.have.prop('name', 'sample-post')
  })

  it('has assigned amount of rows', () => {
    shallow(<Textarea rows='6' />)
      .should.have.tagName('textarea')
      .with.attr('rows', '6')
  })
})

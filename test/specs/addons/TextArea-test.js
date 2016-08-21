import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
import * as common from '../commonTests'

describe('TextArea', () => {
  common.isConformant(TextArea)

  it('accepts a default value', () => {
    const wrapper = mount(<TextArea defaultValue='Hello World' />)

    wrapper
      .should.have.have.exactly(1).descendants('textarea')

    wrapper
      .should.have.value('Hello World')
  })

  it('has a name assigned', () => {
    shallow(<TextArea name='sample-post' />)
      .should.have.prop('name', 'sample-post')
  })

  it('has assigned amount of rows', () => {
    shallow(<TextArea rows='6' />)
      .should.have.tagName('textarea')
      .with.attr('rows', '6')
  })
})

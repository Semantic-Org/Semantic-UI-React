import React from 'react'

import Image from 'src/elements/Image/Image'
import ItemImage from 'src/views/Item/ItemImage'
import * as common from 'test/specs/commonTests'

describe('ItemImage', () => {
  common.implementsCreateMethod(ItemImage)

  describe('children', () => {
    it('renders Image component', () => {
      mount(<ItemImage />)
        .should.have.descendants(Image)
    })
  })

  it('is wrapped without ui', () => {
    const wrapper = shallow(<ItemImage />)

    wrapper.should.have.prop('wrapped', true)
    wrapper.should.have.prop('ui', false)
  })

  it('has ui with size prop', () => {
    shallow(<ItemImage size='small' />)
      .should.have.prop('ui', true)
  })
})

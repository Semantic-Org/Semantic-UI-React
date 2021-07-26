import React from 'react'

import ItemImage from 'src/views/Item/ItemImage'
import * as common from 'test/specs/commonTests'

describe('ItemImage', () => {
  common.isConformant(ItemImage, { rendersChildren: false })
  common.forwardsRef(ItemImage, { tagName: 'img' })
  common.implementsCreateMethod(ItemImage)

  it('renders Image component', () => {
    shallow(<ItemImage />).should.have.descendants('Image')
  })

  it('is wrapped without ui', () => {
    const wrapper = shallow(<ItemImage />)

    wrapper.should.have.prop('wrapped', true)
    wrapper.should.have.prop('ui', false)
  })

  it('has ui with size prop', () => {
    shallow(<ItemImage size='small' />).should.have.prop('ui', true)
  })
})

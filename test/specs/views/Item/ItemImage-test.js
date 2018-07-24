import React from 'react'

import ItemImage from 'src/views/Item/ItemImage'
import * as common from 'test/specs/commonTests'

describe('ItemImage', () => {
  common.implementsCreateMethod(ItemImage)

  it('renders Image component', () => {
    expect(shallow(<ItemImage />).find('Image')).toHaveLength(1)
  })

  it('is wrapped without ui', () => {
    const wrapper = shallow(<ItemImage />)

    expect(wrapper.prop('wrapped')).toBe(true)
    expect(wrapper.prop('ui')).toBe(false)
  })

  it('has ui with size prop', () => {
    expect(shallow(<ItemImage size='small' />).prop('ui')).toBe(true)
  })
})

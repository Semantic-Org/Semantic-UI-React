import React from 'react'
import ItemImage from 'src/views/Item/ItemImage'

describe('ItemImage', () => {
  it('renders Image component', () => {
    shallow(<ItemImage />)
      .should.have.descendants('Image')
  })
})

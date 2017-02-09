import React from 'react'

import Advertisement from 'src/views/Advertisement/Advertisement'
import * as common from 'test/specs/commonTests'

describe('Advertisement', () => {
  common.isConformant(Advertisement)
  common.hasUIClassName(Advertisement)
  common.rendersChildren(Advertisement)

  common.propKeyOnlyToClassName(Advertisement, 'centered')
  common.propKeyOnlyToClassName(Advertisement, 'test')

  it('renders a <div> by default', () => {
    shallow(<Advertisement />).should.have.tagName('div')
  })

  it('should have appropriate classes for unit prop', () => {
    shallow(<Advertisement unit='medium rectangle' />).should.have.className('medium rectangle')
  })
})

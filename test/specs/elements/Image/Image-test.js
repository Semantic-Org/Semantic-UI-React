import _ from 'lodash'
import React from 'react'

import Image from 'src/elements/Image/Image'
import ImageGroup from 'src/elements/Image/ImageGroup'
import * as common from 'test/specs/commonTests'

describe('Image Component', () => {
  common.isConformant(Image)
  common.hasUIClassName(Image)
  common.rendersChildren(Image)
  common.hasSubComponents(Image, [ImageGroup])

  common.propKeyOnlyToClassName(Image, 'avatar')
  common.propKeyOnlyToClassName(Image, 'bordered')
  common.propKeyOnlyToClassName(Image, 'centered')
  common.propKeyOnlyToClassName(Image, 'disabled')
  common.propKeyOnlyToClassName(Image, 'fluid')
  common.propKeyOnlyToClassName(Image, 'hidden')
  common.propKeyOnlyToClassName(Image, 'inline')

  common.propKeyAndValueToClassName(Image, 'floated')
  common.propKeyOrValueToClassName(Image, 'spaced')

  common.propValueOnlyToClassName(Image, 'size')
  common.propValueOnlyToClassName(Image, 'shape')

  common.implementsVerticalAlignProp(Image, 'verticalAlign')

  it('renders an img tag', () => {
    shallow(<Image />)
      .type()
      .should.equal('img')
  })

  describe('href', () => {
    it('renders an a tag', () => {
      shallow(<Image href='http://google.com' />)
        .type()
        .should.equal('a')
    })
  })

  describe('wrapped', () => {
    it('applies all img attribute props to the img tag', () => {
      const props = { src: 'http://g.co', alt: 'alt text', width: 10, height: '10' }
      const img = shallow(<Image {...props} wrapped />)
        .find('img')

      _.each(props, (val, key) => {
        img.should.have.prop(key, val)
      })
    })
  })
})

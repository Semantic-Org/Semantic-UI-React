import _ from 'lodash'
import React from 'react'

import Image from 'src/elements/Image/Image'
import ImageGroup from 'src/elements/Image/ImageGroup'
import { SUI } from 'src/lib'
import Dimmer from 'src/modules/Dimmer/Dimmer'
import * as common from 'test/specs/commonTests'

describe('Image', () => {
  common.isConformant(Image)
  common.hasSubComponents(Image, [ImageGroup])
  common.hasUIClassName(Image)
  common.rendersChildren(Image)

  common.implementsCreateMethod(Image)
  common.implementsLabelProp(Image)
  common.implementsShorthandProp(Image, {
    propKey: 'dimmer',
    ShorthandComponent: Dimmer,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsVerticalAlignProp(Image)

  common.propKeyAndValueToClassName(Image, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Image, 'avatar')
  common.propKeyOnlyToClassName(Image, 'bordered')
  common.propKeyOnlyToClassName(Image, 'centered')
  common.propKeyOnlyToClassName(Image, 'disabled')
  common.propKeyOnlyToClassName(Image, 'fluid')
  common.propKeyOnlyToClassName(Image, 'hidden')
  common.propKeyOnlyToClassName(Image, 'inline')

  common.propKeyOrValueAndKeyToClassName(Image, 'spaced', ['left', 'right'])

  common.propValueOnlyToClassName(Image, 'shape', ['rounded', 'circular'])
  common.propValueOnlyToClassName(Image, 'size', SUI.SIZES)

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

  describe('ui', () => {
    it('is true by default', () => {
      Image.defaultProps.should.have.any.keys('ui')
      Image.defaultProps.ui.should.equal(true)
    })
    it('adds the "ui" className when true', () => {
      shallow(<Image ui />)
        .should.have.className('ui')
    })
    it('removes the "ui" className when false', () => {
      shallow(<Image ui={false} />)
        .should.not.have.className('ui')
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

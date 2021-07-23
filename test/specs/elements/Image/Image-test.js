import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import Image from 'src/elements/Image/Image'
import ImageGroup from 'src/elements/Image/ImageGroup'
import { htmlImageProps, SUI } from 'src/lib'
import Dimmer from 'src/modules/Dimmer/Dimmer'
import * as common from 'test/specs/commonTests'

describe('Image', () => {
  common.isConformant(Image)

  common.forwardsRef(Image, { tagName: 'img' })
  common.forwardsRef(Image, {
    requiredProps: { as: 'div', children: <span /> },
    tagName: 'div',
  })
  common.forwardsRef(Image, {
    requiredProps: { as: 'div', content: <span /> },
    tagName: 'div',
  })
  common.forwardsRef(Image, {
    requiredProps: { label: faker.lorem.word() },
    tagName: 'img',
  })

  common.hasSubcomponents(Image, [ImageGroup])
  common.hasUIClassName(Image)
  common.rendersChildren(Image)

  common.implementsCreateMethod(Image)
  common.implementsLabelProp(Image, { autoGenerateKey: false })
  common.implementsShorthandProp(Image, {
    autoGenerateKey: false,
    propKey: 'dimmer',
    ShorthandComponent: Dimmer,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsVerticalAlignProp(Image)

  common.propKeyAndValueToClassName(Image, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Image, 'avatar')
  common.propKeyOnlyToClassName(Image, 'bordered')
  common.propKeyOnlyToClassName(Image, 'centered')
  common.propKeyOnlyToClassName(Image, 'circular')
  common.propKeyOnlyToClassName(Image, 'disabled')
  common.propKeyOnlyToClassName(Image, 'fluid')
  common.propKeyOnlyToClassName(Image, 'hidden')
  common.propKeyOnlyToClassName(Image, 'inline')
  common.propKeyOnlyToClassName(Image, 'rounded')

  common.propKeyOrValueAndKeyToClassName(Image, 'spaced', ['left', 'right'])

  common.propValueOnlyToClassName(Image, 'size', SUI.SIZES)

  describe('as', () => {
    it('renders "i" by default', () => {
      mount(<Image />).should.have.tagName('img')
    })
  })

  describe('href', () => {
    it('renders an a tag', () => {
      shallow(<Image href='http://example.com' />)
        .type()
        .should.equal('a')
    })
  })

  describe('image props', () => {
    _.forEach(htmlImageProps, (propName) => {
      it(`keeps "${propName}" on root element by default`, () => {
        const wrapper = shallow(<Image {...{ [propName]: 'foo' }} />)

        wrapper.should.have.tagName('img')
        wrapper.should.have.prop(propName, 'foo')
      })

      it(`passes "${propName}" to the img tag when wrapped`, () => {
        shallow(<Image wrapped {...{ [propName]: 'foo' }} />)
          .find('img')
          .should.have.prop(propName, 'foo')
      })
    })
  })

  describe('ui', () => {
    it('is true by default', () => {
      Image.defaultProps.should.have.any.keys('ui')
      Image.defaultProps.ui.should.equal(true)
    })
    it('adds the "ui" className when true', () => {
      shallow(<Image ui />).should.have.className('ui')
    })
    it('removes the "ui" className when false', () => {
      shallow(<Image ui={false} />).should.not.have.className('ui')
    })
  })

  describe('wrapped', () => {
    it('renders an div tag when true', () => {
      shallow(<Image wrapped />)
        .type()
        .should.equal('div')
    })
  })
})

import _ from 'lodash'
import React from 'react'

import Image from 'src/elements/Image/Image'
import ImageGroup from 'src/elements/Image/ImageGroup'
import { SUI } from 'src/lib'
import Dimmer from 'src/modules/Dimmer/Dimmer'
import * as common from 'test/specs/commonTests'

describe('Image', () => {
  common.isConformant(Image)
  common.hasSubcomponents(Image, [ImageGroup])
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
  common.propKeyOnlyToClassName(Image, 'circular')
  common.propKeyOnlyToClassName(Image, 'disabled')
  common.propKeyOnlyToClassName(Image, 'fluid')
  common.propKeyOnlyToClassName(Image, 'hidden')
  common.propKeyOnlyToClassName(Image, 'inline')
  common.propKeyOnlyToClassName(Image, 'rounded')

  common.propKeyOrValueAndKeyToClassName(Image, 'spaced', ['left', 'right'])

  common.propValueOnlyToClassName(Image, 'size', SUI.SIZES)

  describe('as', () => {
    it('renders an img tag', () => {
      expect(shallow(<Image />).type()).toBe('img')
    })
  })

  describe('href', () => {
    it('renders an a tag', () => {
      expect(shallow(<Image href='http://google.com' />).type()).toBe('a')
    })
  })

  describe('image props', () => {
    _.forEach(['alt', 'height', 'src', 'srcSet', 'width'], (propName) => {
      it(`keeps "${propName}" on root element by default`, () => {
        const wrapper = shallow(<Image {...{ [propName]: 'foo' }} />)

        expect(wrapper).have.tagName('img')
        expect(wrapper).have.prop(propName, 'foo')
      })

      it(`passes "${propName}" to the img tag when wrapped`, () => {
        expect(shallow(<Image wrapped {...{ [propName]: 'foo' }} />).find('img')).have.prop(
          propName,
          'foo',
        )
      })
    })
  })

  describe('ui', () => {
    it('is true by default', () => {
      expect(Image.defaultProps).have.key('ui')
      expect(Image.defaultProps.ui).toBe(true)
    })
    it('adds the "ui" className when true', () => {
      expect(shallow(<Image ui />)).have.className('ui')
    })
    it('removes the "ui" className when false', () => {
      expect(shallow(<Image ui={false} />)).not.have.className('ui')
    })
  })

  describe('wrapped', () => {
    it('renders an div tag when true', () => {
      expect(shallow(<Image wrapped />).type()).toBe('div')
    })
  })
})

import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import Header from 'src/elements/Header/Header'
import HeaderContent from 'src/elements/Header/HeaderContent'
import HeaderSubheader from 'src/elements/Header/HeaderSubheader'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Header', () => {
  common.hasUIClassName(Header)
  common.forwardsRef(Header, { requiredProps: { children: <span /> } })
  common.forwardsRef(Header, { requiredProps: { icon: 'book' } })
  common.hasSubcomponents(Header, [HeaderContent, HeaderSubheader])
  common.rendersChildren(Header)

  common.implementsIconProp(Header, { autoGenerateKey: false })
  common.implementsImageProp(Header, { autoGenerateKey: false })
  common.implementsShorthandProp(Header, {
    autoGenerateKey: false,
    propKey: 'subheader',
    ShorthandComponent: HeaderSubheader,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsTextAlignProp(Header)

  common.propKeyAndValueToClassName(Header, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Header, 'block')
  common.propKeyOnlyToClassName(Header, 'disabled')
  common.propKeyOnlyToClassName(Header, 'dividing')
  common.propKeyOnlyToClassName(Header, 'inverted')
  common.propKeyOnlyToClassName(Header, 'sub')

  common.propKeyOrValueAndKeyToClassName(Header, 'attached', ['top', 'bottom'])

  common.propValueOnlyToClassName(Header, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Header, 'size', _.without(SUI.SIZES, 'big', 'massive', 'mini'))

  describe('icon', () => {
    it('adds an icon class when true', () => {
      shallow(<Header icon />).should.have.className('icon')
    })
    it('does not add an icon class given a name', () => {
      shallow(<Header icon='user' />).should.not.have.className('icon')
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      shallow(<Header image />).should.have.className('image')
    })
    it('does not add an Image when true', () => {
      shallow(<Header image />).should.not.have.descendants('Image')
    })
  })

  describe('content', () => {
    it('is wrapped in HeaderContent when there is an image src', () => {
      shallow(<Header image='/images/wireframe/image.png' content='Bar' />)
        .find('HeaderContent')
        .shallow()
        .should.contain.text('Bar')
    })
    it('is wrapped in HeaderContent when there is an icon name', () => {
      shallow(<Header icon='users' content='Friends' />)
        .find('HeaderContent')
        .shallow()
        .should.contain.text('Friends')
    })
    it('is not wrapped in HeaderContent when icon is true', () => {
      const wrapper = shallow(<Header icon content='Friends' />)

      wrapper.should.contain.text('Friends')
      wrapper.should.not.have.descendants('HeaderContent')
    })
  })

  describe('subheader', () => {
    it('adds HeaderSubheader as child when there is an icon', () => {
      const text = faker.hacker.phrase()

      shallow(<Header icon='user' subheader={text} />)
        .find('HeaderSubheader')
        .should.have.prop('content', text)
    })
    it('adds HeaderSubheader as child when there is an image', () => {
      const text = faker.hacker.phrase()

      shallow(<Header image='/images/wireframe/image.png' subheader={text} />)
        .find('HeaderSubheader')
        .should.have.prop('content', text)
    })
  })
})

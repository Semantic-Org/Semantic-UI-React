import React from 'react'
import Header from 'src/elements/Header/Header'
import HeaderContent from 'src/elements/Header/HeaderContent'
import HeaderSubheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('Header', () => {
  common.hasUIClassName(Header)
  common.hasSubComponents(Header, [HeaderContent, HeaderSubheader])
  common.rendersChildren(Header)

  common.propKeyOnlyToClassName(Header, 'dividing')
  common.propKeyOnlyToClassName(Header, 'block')
  common.propKeyOnlyToClassName(Header, 'inverted')
  common.propKeyOnlyToClassName(Header, 'disabled')
  common.propKeyOnlyToClassName(Header, 'sub')

  common.propKeyAndValueToClassName(Header, 'floated')
  common.propKeyOrValueToClassName(Header, 'attached')

  common.propValueOnlyToClassName(Header, 'color')
  common.propValueOnlyToClassName(Header, 'size')

  common.implementsIconProp(Header)
  common.implementsImageProp(Header)
  common.implementsTextAlignProp(Header)

  describe('icon', () => {
    it('adds an icon class when true', () => {
      shallow(<Header icon />)
        .should.have.className('icon')
    })
    it('does not add an Icon when true', () => {
      shallow(<Header icon />)
        .should.not.have.descendants('Icon')
    })
    it('adds an Icon when given a name', () => {
      shallow(<Header icon='user' />)
        .should.have.descendants('Icon')
    })
    it('does not add an icon class given a name', () => {
      shallow(<Header icon='user' />)
        .should.not.have.className('icon')
    })
  })

  describe('content', () => {
    it('adds child text', () => {
      shallow(<Header content='foo' />)
        .should.have.prop('children', 'foo')
    })
    it('adds child text when there is an image', () => {
      shallow(<Header content='foo' image='foo.png' />)
        .should.contain.text('foo')
    })
    it('is wrapped in HeaderContent when there is an icon name', () => {
      shallow(<Header icon='users' content='Friends' />)
        .find('HeaderContent')
        .should.have.prop('children', 'Friends')
    })
    it('is not wrapped in HeaderContent when icon is true', () => {
      const wrapper = shallow(<Header icon content='Friends' />)

      wrapper.should.contain.text('Friends')
      wrapper.should.not.have.descendants('HeaderContent')
    })
  })
})

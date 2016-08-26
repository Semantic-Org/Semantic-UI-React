import faker from 'faker'
import React from 'react'
import Header from 'src/elements/Header/Header'
import Subheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('Header', () => {
  common.hasUIClassName(Header)
  common.hasSubComponents(Header, [Subheader])
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

  it('has an icon class when adding an icon', () => {
    const iconClass = faker.hacker.noun()
    const wrapper = mount(<Header icon={iconClass} />)
    wrapper.should.have.className('icon')
  })

  describe('content', () => {
    it('renders text', () => {
      shallow(<Header content='foo' />)
        .should.contain.text('foo')
    })
  })
})

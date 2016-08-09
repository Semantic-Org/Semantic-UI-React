import faker from 'faker'
import React from 'react'
import _Header from 'src/elements/Header/_Header'
import * as common from 'test/specs/commonTests'

describe('_Header', () => {
  common.hasUIClassName(_Header)
  common.rendersChildren(_Header)

  common.propKeyOnlyToClassName(_Header, 'dividing')
  common.propKeyOnlyToClassName(_Header, 'block')
  common.propKeyOnlyToClassName(_Header, 'inverted')
  common.propKeyOnlyToClassName(_Header, 'disabled')

  common.propKeyAndValueToClassName(_Header, 'floated')
  common.propKeyOrValueToClassName(_Header, 'attached')

  common.propValueOnlyToClassName(_Header, 'color')

  common.implementsIconProp(_Header)
  common.implementsImageProp(_Header)
  common.implementsTextAlignProp(_Header)

  it('has an icon class when adding an icon', () => {
    const iconClass = faker.hacker.noun()
    const wrapper = mount(<_Header icon={iconClass} />)
    wrapper.should.have.className('icon')
  })
})

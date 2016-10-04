import faker from 'faker'
import React from 'react'

import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.rendersChildren(DropdownItem)

  common.propKeyOnlyToClassName(DropdownItem, 'selected')
  common.propKeyOnlyToClassName(DropdownItem, 'active')

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'description',
    ShorthandComponent: 'span',
    mapValueToProps: val => ({
      className: 'description',
      children: val,
    }),
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<DropdownItem />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, value) when clicked', () => {
      const spy = sandbox.spy()

      const value = faker.hacker.phrase()
      const event = { target: null }
      const props = { value }

      shallow(<DropdownItem onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, value)
    })
  })
})

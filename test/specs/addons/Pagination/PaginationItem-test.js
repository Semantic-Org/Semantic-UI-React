import React from 'react'

import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('PaginationItem', () => {
  common.isConformant(PaginationItem)
  common.forwardsRef(PaginationItem, { tagName: 'a' })
  common.implementsCreateMethod(PaginationItem)

  describe('active', () => {
    it('is "undefined" by default', () => {
      shallow(<PaginationItem />).should.have.not.prop('active')
    })

    it('can pass its value', () => {
      shallow(<PaginationItem active />).should.have.prop('active', true)
    })
  })

  describe('aria-current', () => {
    it('matches the values of "active" prop by default', () => {
      shallow(<PaginationItem active />).should.have.prop('aria-current', true)
    })

    it('can be overridden', () => {
      shallow(<PaginationItem active aria-current={false} />).should.have.prop(
        'aria-current',
        false,
      )
    })
  })

  describe('disabled', () => {
    it('is "false" by default', () => {
      const wrapper = shallow(<PaginationItem />)

      wrapper.should.have.prop('disabled', false)
      wrapper.should.have.prop('aria-disabled', false)
    })

    it('is "true" when "type" is "ellipsisItem"', () => {
      const wrapper = shallow(<PaginationItem type='ellipsisItem' />)

      wrapper.should.have.prop('disabled', true)
      wrapper.should.have.prop('aria-disabled', true)
    })

    it('can be overridden', () => {
      const wrapper = shallow(<PaginationItem disabled />)

      wrapper.should.have.prop('disabled', true)
      wrapper.should.have.prop('aria-disabled', true)
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { onClick })
    })

    it('is called with (e, props) when "Enter" is pressed', () => {
      const event = { key: 'Enter', target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />).simulate('keyDown', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { onClick })
    })
  })

  describe('onKeyDown', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { key: 'Enter', target: null }
      const onKeyDown = sandbox.spy()

      shallow(<PaginationItem onKeyDown={onKeyDown} />).simulate('keyDown', event)

      onKeyDown.should.have.been.calledOnce()
      onKeyDown.should.have.been.calledWithMatch(event, { onKeyDown })
    })
  })

  describe('tabIndex', () => {
    it('is "0" by default', () => {
      shallow(<PaginationItem />).should.have.prop('tabIndex', 0)
    })

    it('is "-1" when "type" is "ellipsisItem"', () => {
      shallow(<PaginationItem type='ellipsisItem' />).should.have.prop('tabIndex', -1)
    })

    it('can be overridden', () => {
      shallow(<PaginationItem tabIndex={5} />).should.have.prop('tabIndex', 5)
    })
  })
})

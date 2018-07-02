import React from 'react'

import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('PaginationItem', () => {
  common.isConformant(PaginationItem)
  common.implementsCreateMethod(PaginationItem)

  describe('active', () => {
    it('is "undefined" by default', () => {
      expect(shallow(<PaginationItem />)).have.not.prop('active')
    })

    it('can pass its value', () => {
      expect(shallow(<PaginationItem active />)).have.prop('active', true)
    })
  })

  describe('aria-current', () => {
    it('matches the values of "active" prop by default', () => {
      expect(shallow(<PaginationItem active />)).have.prop('aria-current', true)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem active aria-current={false} />)).have.prop(
        'aria-current',
        false,
      )
    })
  })

  describe('disabled', () => {
    it('is "false" by default', () => {
      expect(shallow(<PaginationItem />)).have.prop('disabled', false)
    })

    it('is "true" when "type" is "ellipsisItem"', () => {
      expect(shallow(<PaginationItem type='ellipsisItem' />)).have.prop('disabled', true)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem disabled />)).have.prop('disabled', true)
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />).simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, { onClick })
    })

    it('is called with (e, props) when "Enter" is pressed', () => {
      const event = { key: 'Enter', target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />).simulate('keyDown', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, { onClick })
    })

    it('is omitted when "type" is "ellipsisItem"', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} type='ellipsisItem' />).simulate('click', event)

      expect(onClick).have.been.not.called()
    })
  })

  describe('onKeyDown', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { key: 'Enter', target: null }
      const onKeyDown = sandbox.spy()

      shallow(<PaginationItem onKeyDown={onKeyDown} />).simulate('keyDown', event)

      expect(onKeyDown).have.been.calledOnce()
      expect(onKeyDown).have.been.calledWithMatch(event, { onKeyDown })
    })
  })

  describe('tabIndex', () => {
    it('is "0" by default', () => {
      expect(shallow(<PaginationItem />)).have.prop('tabIndex', 0)
    })

    it('is "-1" when "type" is "ellipsisItem"', () => {
      expect(shallow(<PaginationItem type='ellipsisItem' />)).have.prop('tabIndex', -1)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem tabIndex={5} />)).have.prop('tabIndex', 5)
    })
  })
})

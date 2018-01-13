import React from 'react'

import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('PaginationItem', () => {
  common.isConformant(PaginationItem)
  common.implementsCreateMethod(PaginationItem)

  describe('disabled', () => {
    it('is false by default', () => {
      shallow(<PaginationItem />)
        .should.have.prop('disabled', false)
    })

    it('is true when "type" is "ellipsisItem"', () => {
      shallow(<PaginationItem type='ellipsisItem' />)
        .should.have.prop('disabled', true)
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />)
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { onClick })
    })

    it('is called with (e, props) when "Enter" is pressed', () => {
      const event = { key: 'Enter', target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} />)
        .simulate('keyDown', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { onClick })
    })

    it('is omitted when "type" is "ellipsisItem"', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<PaginationItem onClick={onClick} type='ellipsisItem' />)
        .simulate('click', event)

      onClick.should.have.been.not.called()
    })
  })

  describe('onKeyDown', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { key: 'Enter', target: null }
      const onKeyDown = sandbox.spy()

      shallow(<PaginationItem onKeyDown={onKeyDown} />)
        .simulate('keyDown', event)

      onKeyDown.should.have.been.calledOnce()
      onKeyDown.should.have.been.calledWithMatch(event, { onKeyDown })
    })
  })

  describe('tabIndex', () => {
    it('is 0 by default', () => {
      shallow(<PaginationItem />)
        .should.have.prop('tabIndex', 0)
    })

    it('is -1 when "type" is "ellipsisItem"', () => {
      shallow(<PaginationItem type='ellipsisItem' />)
        .should.have.prop('tabIndex', -1)
    })
  })
})

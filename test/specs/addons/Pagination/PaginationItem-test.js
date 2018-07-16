import React from 'react'

import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'

describe('PaginationItem', () => {
  common.isConformant(PaginationItem)
  common.implementsCreateMethod(PaginationItem)

  describe('active', () => {
    it('is "undefined" by default', () => {
      expect(shallow(<PaginationItem />).prop('active')).toBeUndefined()
    })

    it('can pass its value', () => {
      expect(shallow(<PaginationItem active />).prop('active')).toBe(true)
    })
  })

  describe('aria-current', () => {
    it('matches the values of "active" prop by default', () => {
      expect(shallow(<PaginationItem active />).prop('aria-current')).toBe(true)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem active aria-current={false} />).prop('aria-current')).toBe(
        false,
      )
    })
  })

  describe('disabled', () => {
    it('is "false" by default', () => {
      expect(shallow(<PaginationItem />).prop('disabled')).toBe(false)
    })

    it('is "true" when "type" is "ellipsisItem"', () => {
      expect(shallow(<PaginationItem type='ellipsisItem' />).prop('disabled')).toBe(true)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem disabled />).prop('disabled')).toBe(true)
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { target: null }
      const onClick = jest.fn()

      shallow(<PaginationItem onClick={onClick} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(event, { onClick })
    })

    it('is called with (e, props) when "Enter" is pressed', () => {
      const event = { key: 'Enter', target: null }
      const onClick = jest.fn()

      shallow(<PaginationItem onClick={onClick} />).simulate('keyDown', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(event, { onClick })
    })

    it('is omitted when "type" is "ellipsisItem"', () => {
      const event = { target: null }
      const onClick = jest.fn()

      shallow(<PaginationItem onClick={onClick} type='ellipsisItem' />).simulate('click', event)

      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('onKeyDown', () => {
    it('is called with (e, props) when clicked', () => {
      const event = { key: 'Enter', target: null }
      const onKeyDown = jest.fn()

      shallow(<PaginationItem onKeyDown={onKeyDown} />).simulate('keyDown', event)

      expect(onKeyDown).toHaveBeenCalledTimes(1)
      expect(onKeyDown).toHaveBeenCalledWith(event, { onKeyDown })
    })
  })

  describe('tabIndex', () => {
    it('is "0" by default', () => {
      expect(shallow(<PaginationItem />).prop('tabIndex')).toBe(0)
    })

    it('is "-1" when "type" is "ellipsisItem"', () => {
      expect(shallow(<PaginationItem type='ellipsisItem' />).prop('tabIndex')).toBe(-1)
    })

    it('can be overridden', () => {
      expect(shallow(<PaginationItem tabIndex={5} />).prop('tabIndex')).toBe(5)
    })
  })
})

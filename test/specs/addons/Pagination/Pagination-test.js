import React from 'react'

import Pagination from 'src/addons/Pagination/Pagination'
import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Pagination', () => {
  common.isConformant(Pagination, {
    requiredProps: {
      totalPages: 0,
    },
  })
  common.hasSubcomponents(Pagination, [PaginationItem])

  describe('disabled', () => {
    it('is passed to an each item', () => {
      const wrapper = shallow(<Pagination activePage={1} disabled totalPages={3} />)
      const items = wrapper.find('PaginationItem')

      items.everyWhere(item => item.prop('disabled', true)).should.to.equal(true)
    })
  })

  describe('onPageChange', () => {
    it('is called with (e, data) when clicked on a pagination item', () => {
      const event = { target: null }
      const onPageChange = sandbox.spy()
      const onPageItemClick = sandbox.spy()

      mount(
        <Pagination
          activePage={1}
          onPageChange={onPageChange}
          pageItem={{ onClick: onPageItemClick }}
          totalPages={3}
        />,
      )
        .find('PaginationItem')
        .at(4)
        .simulate('click', event)

      onPageChange.should.have.been.calledOnce()
      onPageChange.should.have.been.calledWithMatch(event, { activePage: 3 })
      onPageItemClick.should.have.been.calledOnce()
      onPageItemClick.should.have.been.calledWithMatch(event, { value: 3 })
    })

    it('will be omitted if occurred for the same pagination item as the current', () => {
      const onPageChange = sandbox.spy()
      const wrapper = mount(
        <Pagination
          activePage={1}
          firstItem={null}
          onPageChange={onPageChange}
          prevItem={null}
          totalPages={3}
        />,
      )

      wrapper
        .find('PaginationItem')
        .at(0)
        .simulate('click')
      onPageChange.should.have.not.been.called()
    })

    it('will be omitted when item "type" is "ellipsisItem"', () => {
      const onPageChange = sandbox.spy()
      const wrapper = mount(
        <Pagination
          activePage={5}
          firstItem={null}
          onPageChange={onPageChange}
          prevItem={null}
          totalPages={10}
        />,
      )

      wrapper
        .find('PaginationItem')
        .at(1)
        .simulate('click')
      onPageChange.should.have.not.been.called()
    })
  })
})

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

      expect(onPageChange).have.been.calledOnce()
      expect(onPageChange).have.been.calledWithMatch(event, { activePage: 3 })
      expect(onPageItemClick).have.been.calledOnce()
      expect(onPageItemClick).have.been.calledWithMatch(event, { value: 3 })
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
      expect(onPageChange).have.not.been.called()
    })
  })
})

import React from 'react'

import Pagination from 'src/addons/Pagination/Pagination'
import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Pagination', () => {
  common.isConformant(Pagination, { requiredProps: {
    totalPages: 0,
  } })
  common.hasSubComponents(Pagination, [PaginationItem])

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
  })
})

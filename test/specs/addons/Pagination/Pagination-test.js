import React from 'react'

import Pagination from 'src/addons/Pagination/Pagination'
import PaginationItem from 'src/addons/Pagination/PaginationItem'
import * as common from 'test/specs/commonTests'

describe('Pagination', () => {
  common.isConformant(Pagination, {
    rendersChildren: false,
    requiredProps: {
      totalPages: 1,
    },
  })
  common.hasSubcomponents(Pagination, [PaginationItem])

  describe('onPageChange', () => {
    it('is called with (e, data) when clicked on a pagination item', () => {
      const event = { target: null }
      const onPageChange = jest.fn()
      const onPageItemClick = jest.fn()

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

      expect(onPageChange).toHaveBeenCalledTimes(1)
      expect(onPageChange).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ activePage: 3 }),
      )
      expect(onPageItemClick).toHaveBeenCalledTimes(1)
      expect(onPageItemClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ value: 3 }),
      )
    })

    it('will be omitted if occurred for the same pagination item as the current', () => {
      const onPageChange = jest.fn()
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
      expect(onPageChange).not.toHaveBeenCalled()
    })
  })
})

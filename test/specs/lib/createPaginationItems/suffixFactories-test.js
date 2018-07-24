import { createInnerPrefix, createInnerSuffix } from 'src/lib/createPaginationItems/suffixFactories'

describe('suffixFactories', () => {
  describe('createInnerPrefix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerPrefix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = jest.fn()
      createInnerPrefix(5, 7, pageFactory)

      expect(pageFactory).toHaveBeenCalledTimes(1)
    })
  })

  describe('createInnerSuffix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerSuffix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = jest.fn()
      createInnerSuffix(5, 7, pageFactory)

      expect(pageFactory).toHaveBeenCalledTimes(1)
    })
  })
})

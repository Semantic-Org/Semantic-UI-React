import { createInnerPrefix, createInnerSuffix } from 'src/lib/createPaginationItems/suffixFactories'

describe('suffixFactories', () => {
  describe('createInnerPrefix', () => {
    test('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerPrefix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    test('calls pageFactory when position matches border of a group', () => {
      const pageFactory = jest.fn()
      createInnerPrefix(5, 7, pageFactory)

      expect(pageFactory).toHaveBeenCalled()
    })
  })

  describe('createInnerSuffix', () => {
    test('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerSuffix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    test('calls pageFactory when position matches border of a group', () => {
      const pageFactory = jest.fn()
      createInnerSuffix(5, 7, pageFactory)

      expect(pageFactory).toHaveBeenCalled()
    })
  })
})

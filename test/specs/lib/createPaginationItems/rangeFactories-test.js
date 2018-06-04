import { createSimpleRange } from 'src/lib/createPaginationItems/rangeFactories'

describe('rangeFactories', () => {
  describe('createSimpleRange', () => {
    test('creates range and calls pageFactory', () => {
      const pageFactory = jest.fn()
      createSimpleRange(5, 10, pageFactory)

      expect(pageFactory).toHaveBeenCalledTimes(6)
    })
  })
})

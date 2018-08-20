import { createSimpleRange } from 'src/lib/createPaginationItems/rangeFactories'
import { sandbox } from 'test/utils'

describe('rangeFactories', () => {
  describe('createSimpleRange', () => {
    it('creates range and calls pageFactory', () => {
      const pageFactory = sandbox.spy()
      createSimpleRange(5, 10, pageFactory)

      pageFactory.should.have.callCount(6)
    })
  })
})

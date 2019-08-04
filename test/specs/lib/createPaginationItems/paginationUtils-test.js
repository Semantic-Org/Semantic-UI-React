import { createInnerPrefix, createInnerSuffix } from 'src/lib/createPaginationItems/suffixFactories'
import { sandbox } from 'test/utils'

describe('suffixFactories', () => {
  describe('createInnerPrefix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      createInnerPrefix(5, 10, () => {}).should.have.property('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = sandbox.spy()
      createInnerPrefix(5, 7, pageFactory)

      pageFactory.should.have.been.calledOnce()
    })
  })

  describe('createInnerSuffix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      createInnerSuffix(5, 10, () => {}).should.have.property('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = sandbox.spy()
      createInnerSuffix(5, 7, pageFactory)

      pageFactory.should.have.been.calledOnce()
    })
  })
})

import { createInnerPrefix, createInnerSuffix } from 'src/lib/createPaginationItems/suffixFactories'
import { sandbox } from 'test/utils'

describe('suffixFactories', () => {
  describe('createInnerPrefix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerPrefix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = sandbox.spy()
      createInnerPrefix(5, 7, pageFactory)

      expect(pageFactory).have.been.calledOnce()
    })
  })

  describe('createInnerSuffix', () => {
    it('returns ellipsisItem when is outside innerGroup', () => {
      expect(createInnerSuffix(5, 10, () => {})).toHaveProperty('type', 'ellipsisItem')
    })

    it('calls pageFactory when position matches border of a group', () => {
      const pageFactory = sandbox.spy()
      createInnerSuffix(5, 7, pageFactory)

      expect(pageFactory).have.been.calledOnce()
    })
  })
})

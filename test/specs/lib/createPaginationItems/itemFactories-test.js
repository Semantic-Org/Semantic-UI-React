import {
  createEllipsisItem,
  createFirstPage,
  createLastItem,
  createNextItem,
  createPageFactory,
  createPrevItem,
} from 'src/lib/createPaginationItems/itemFactories'

describe('itemFactories', () => {
  describe('createEllipsisItem', () => {
    it('"active" is always false', () => {
      createEllipsisItem(0).should.have.property('active', false)
    })
    it('"type" matches "ellipsisItem"', () => {
      createEllipsisItem(0).should.have.property('type', 'ellipsisItem')
    })
    it('"value" matches passed argument', () => {
      createEllipsisItem(5).should.have.property('value', 5)
    })
  })

  describe('createFirstPage', () => {
    it('"active" is always false', () => {
      createFirstPage().should.have.property('active', false)
    })
    it('"type" matches "firstItem"', () => {
      createFirstPage().should.have.property('type', 'firstItem')
    })
    it('"value" always returns 1', () => {
      createFirstPage().should.have.property('value', 1)
    })
  })

  describe('createPrevItem', () => {
    it('"active" is always false', () => {
      createPrevItem(1).should.have.property('active', false)
    })
    it('"type" matches "prevItem"', () => {
      createPrevItem(1).should.have.property('type', 'prevItem')
    })
    it('"value" returns previous page number or 1', () => {
      createPrevItem(1).should.have.property('value', 1)
      createPrevItem(2).should.have.property('value', 1)
      createPrevItem(3).should.have.property('value', 2)
    })
  })

  describe('createPageFactory', () => {
    const pageFactory = createPageFactory(1)

    it('returns function', () => {
      pageFactory.should.be.a('function')
    })
    it('"active" is true when pageNumber is equal to activePage', () => {
      pageFactory(1).should.have.property('active', true)
    })
    it('"active" is false when pageNumber is not equal to activePage', () => {
      pageFactory(2).should.have.property('active', false)
    })
    it('"type" of created item matches "pageItem"', () => {
      pageFactory(2).should.have.property('type', 'pageItem')
    })
    it('"value" returns pageNumber', () => {
      pageFactory(1).should.have.property('value', 1)
      pageFactory(2).should.have.property('value', 2)
    })
  })

  describe('createNextItem', () => {
    it('"active" is always false', () => {
      createNextItem(0, 0).should.have.property('active', false)
    })
    it('"type" matches "nextItem"', () => {
      createNextItem(0, 0).should.have.property('type', 'nextItem')
    })
    it('"value" returns the smallest of the arguments', () => {
      createNextItem(1, 3).should.have.property('value', 2)
      createNextItem(2, 3).should.have.property('value', 3)
      createNextItem(3, 3).should.have.property('value', 3)
    })
  })

  describe('createLastItem', () => {
    it('"active" is always false', () => {
      createLastItem(0).should.have.property('active', false)
    })
    it('"type" matches "lastItem"', () => {
      createLastItem(0).should.have.property('type', 'lastItem')
    })
    it('"value" matches passed argument', () => {
      createLastItem(2).should.have.property('value', 2)
    })
  })
})

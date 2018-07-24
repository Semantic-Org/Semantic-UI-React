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
      expect(createEllipsisItem(0)).toHaveProperty('active', false)
    })
    it('"type" matches "ellipsisItem"', () => {
      expect(createEllipsisItem(0)).toHaveProperty('type', 'ellipsisItem')
    })
    it('"value" matches passed argument', () => {
      expect(createEllipsisItem(5)).toHaveProperty('value', 5)
    })
  })

  describe('createFirstPage', () => {
    it('"active" is always false', () => {
      expect(createFirstPage()).toHaveProperty('active', false)
    })
    it('"type" matches "firstItem"', () => {
      expect(createFirstPage()).toHaveProperty('type', 'firstItem')
    })
    it('"value" always returns 1', () => {
      expect(createFirstPage()).toHaveProperty('value', 1)
    })
  })

  describe('createPrevItem', () => {
    it('"active" is always false', () => {
      expect(createPrevItem(1)).toHaveProperty('active', false)
    })
    it('"type" matches "prevItem"', () => {
      expect(createPrevItem(1)).toHaveProperty('type', 'prevItem')
    })
    it('"value" returns previous page number or 1', () => {
      expect(createPrevItem(1)).toHaveProperty('value', 1)
      expect(createPrevItem(2)).toHaveProperty('value', 1)
      expect(createPrevItem(3)).toHaveProperty('value', 2)
    })
  })

  describe('createPageFactory', () => {
    const pageFactory = createPageFactory(1)

    it('returns function', () => {
      expect(typeof pageFactory).toBe('function')
    })
    it('"active" is true when pageNumber is equal to activePage', () => {
      expect(pageFactory(1)).toHaveProperty('active', true)
    })
    it('"active" is false when pageNumber is not equal to activePage', () => {
      expect(pageFactory(2)).toHaveProperty('active', false)
    })
    it('"type" of created item matches "pageItem"', () => {
      expect(pageFactory(2)).toHaveProperty('type', 'pageItem')
    })
    it('"value" returns pageNumber', () => {
      expect(pageFactory(1)).toHaveProperty('value', 1)
      expect(pageFactory(2)).toHaveProperty('value', 2)
    })
  })

  describe('createNextItem', () => {
    it('"active" is always false', () => {
      expect(createNextItem(0, 0)).toHaveProperty('active', false)
    })
    it('"type" matches "nextItem"', () => {
      expect(createNextItem(0, 0)).toHaveProperty('type', 'nextItem')
    })
    it('"value" returns the smallest of the arguments', () => {
      expect(createNextItem(1, 3)).toHaveProperty('value', 2)
      expect(createNextItem(2, 3)).toHaveProperty('value', 3)
      expect(createNextItem(3, 3)).toHaveProperty('value', 3)
    })
  })

  describe('createLastItem', () => {
    it('"active" is always false', () => {
      expect(createLastItem(0)).toHaveProperty('active', false)
    })
    it('"type" matches "lastItem"', () => {
      expect(createLastItem(0)).toHaveProperty('type', 'lastItem')
    })
    it('"value" matches passed argument', () => {
      expect(createLastItem(2)).toHaveProperty('value', 2)
    })
  })
})

import createPaginationItems from 'src/lib/createPaginationItems'

describe('createPaginationItems', () => {
  it('creates an array of item objects', () => {
    createPaginationItems({
      activePage: 15,
      boundaryRange: 2,
      siblingRange: 2,
      totalPages: 30,
    }).should.deep.equal([
      { active: false, type: 'firstItem', value: 1 },
      { active: false, type: 'prevItem', value: 14 },

      { active: false, type: 'pageItem', value: 1 },
      { active: false, type: 'pageItem', value: 2 },

      { active: false, type: 'ellipsisItem', value: 12 },
      { active: false, type: 'pageItem', value: 13 },
      { active: false, type: 'pageItem', value: 14 },
      { active: true, type: 'pageItem', value: 15 },
      { active: false, type: 'pageItem', value: 16 },
      { active: false, type: 'pageItem', value: 17 },
      { active: false, type: 'ellipsisItem', value: 18 },

      { active: false, type: 'pageItem', value: 29 },
      { active: false, type: 'pageItem', value: 30 },

      { active: false, type: 'nextItem', value: 16 },
      { active: false, type: 'lastItem', value: 30 },
    ])
  })
})


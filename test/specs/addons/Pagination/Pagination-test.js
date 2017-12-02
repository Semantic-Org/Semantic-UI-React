import React from 'react'

import Pagination, { computeR } from 'src/addons/Pagination/Pagination'

describe('Pagination', () => {
  describe('computePrevRange', () => {
    it('1', () => {
      const range = computeR(10, 2, 2, 20)
      console.log(range)
      // 1 2 null 8 9 10 11 12 null
      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, null, 8, 9, 10, 11, 12, null, 19, 20])
    })

    it('2', () => {
      const range = computeR(1, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, 3, 4, 5, 6, 7, null, 19, 20])
    })

    it('3', () => {
      const range = computeR(3, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, 3, 4, 5, 6, 7, null, 19, 20])
    })

    it('4', () => {
      const range = computeR(4, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, 3, 4, 5, 6, 7, null, 19, 20])
    })

    it('5', () => {
      const range = computeR(5, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, null, 3, 4, 5, 6, 7, null, 19, 20])
    })

    it('6', () => {
      const range = computeR(6, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, null, 4, 5, 6, 7, 8, null, 19, 20])
    })

    it('20', () => {
      const range = computeR(20, 2, 2, 20)
      console.log(range)

      // range.should.have.lengthOf(2)
      range.should.deep.equal([1, 2, null, 16, 17, 18, 19, 20])
    })
  })
})

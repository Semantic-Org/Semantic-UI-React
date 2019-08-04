import { canFit } from 'src/modules/Modal/utils'

describe('canFit', () => {
  const innerHeight = window.innerHeight

  before(() => {
    window.innerHeight = 1000
  })

  after(() => {
    window.innerHeight = innerHeight
  })

  it('computes proper result', () => {
    ;[
      // { rect: { height: 1000 }, fit: false },
      // { rect: { height: 950 }, fit: false },
      { rect: { height: 900 }, fit: false },
      { rect: { height: 850 }, fit: true },
      { rect: { height: 800 }, fit: true },
    ].forEach((check) => {
      canFit(check.rect).should.be.equal(check.fit)
    })
  })
})

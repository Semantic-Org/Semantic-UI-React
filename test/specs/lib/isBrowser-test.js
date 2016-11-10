import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  it('should return true in a browser', () => {
    // tests are run in a browser, this should be true
    isBrowser.should.be.true()
  })

  it('should return false when there is no document', () => {
    require('imports?document=>undefined!src/lib/isBrowser').default.should.be.false()
    require('imports?document=>null!src/lib/isBrowser').default.should.be.false()
  })

  it('should return false when there is no window', () => {
    require('imports?window=>undefined!src/lib/isBrowser').default.should.be.false()
    require('imports?window=>null!src/lib/isBrowser').default.should.be.false()
  })
})

import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  describe('browser', () => {
    it('should return true in a browser', () => {
      // tests are run in a browser, this should be true
      isBrowser().should.be.true()
    })

    it('should return false when there is no document', () => {
      require('imports-loader?additionalCode=var%20document=undefined;!src/lib/isBrowser')
        .default()
        .should.be.false()
      require('imports-loader?additionalCode=var%20document=null;!src/lib/isBrowser')
        .default()
        .should.be.false()
    })

    it('should return false when there is no window', () => {
      require('imports-loader?additionalCode=var%20window=undefined;!src/lib/isBrowser')
        .default()
        .should.be.false()
      require('imports-loader?additionalCode=var%20window=null;!src/lib/isBrowser')
        .default()
        .should.be.false()
    })
  })

  describe('server-side', () => {
    before(() => {
      isBrowser.override = false
    })

    after(() => {
      isBrowser.override = null
    })

    it('should return override value', () => {
      // tests are run in a browser, this should be true
      isBrowser().should.be.false()
    })
  })
})

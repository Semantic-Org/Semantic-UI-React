import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  describe('browser', () => {
    it('should return true in a browser', () => {
      // tests are run in a browser, this should be true
      expect(isBrowser()).toBe(true)
    })

    it('should return false when there is no document', () => {
      expect(require('imports-loader?document=>undefined!src/lib/isBrowser').default()).toBe(false)
      expect(require('imports-loader?document=>null!src/lib/isBrowser').default()).toBe(false)
    })

    it('should return false when there is no window', () => {
      expect(require('imports-loader?window=>undefined!src/lib/isBrowser').default()).toBe(false)
      expect(require('imports-loader?window=>null!src/lib/isBrowser').default()).toBe(false)
    })
  })

  describe('server-side', () => {
    beforeAll(() => {
      isBrowser.override = false
    })

    afterAll(() => {
      isBrowser.override = null
    })

    it('should return override value', () => {
      // tests are run in a browser, this should be true
      expect(isBrowser()).toBe(false)
    })
  })
})

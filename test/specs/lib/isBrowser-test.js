/**
 * @jest-environment node
 */
import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  describe('browser', () => {
    beforeEach(jest.resetModules)

    it('should return true in a browser', () => {
      global.document = {}
      global.window = {}
      global.window.self = global.window

      // tests are run in a browser, this should be true
      expect(require('src/lib/isBrowser').default()).toBe(true)
    })

    it('should return false when there is no document', () => {
      expect(isBrowser()).toBe(false)
      expect(isBrowser()).toBe(false)
    })

    it('should return false when there is no window', () => {
      expect(isBrowser()).toBe(false)
      expect(isBrowser()).toBe(false)
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

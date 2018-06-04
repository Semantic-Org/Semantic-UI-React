import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  describe('browser', () => {
    test('should return true in a browser', () => {
      expect(isBrowser()).toBe(true)
    })
  })

  describe('server-side', () => {
    beforeAll(() => {
      isBrowser.override = false
    })

    afterAll(() => {
      isBrowser.override = null
    })

    test('should return override value', () => {
      expect(isBrowser()).toBe(false)
    })
  })
})

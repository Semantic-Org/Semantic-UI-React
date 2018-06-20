import isBrowser from 'src/lib/isBrowser'

describe('isBrowser', () => {
  describe('browser', () => {
    test('should return true in a browser', () => {
      expect(isBrowser()).toBe(true)
    })
  })
})

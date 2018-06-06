import hasChildren from 'src/lib/hasChildren'

describe('hasChildren', () => {
  test('returns false for null', () => {
    expect(hasChildren(null)).toBe(false)
  })
  test('returns false for void 0', () => {
    expect(hasChildren(void 0)).toBe(false) // eslint-disable-line no-void
  })
  test('returns false for undefined', () => {
    expect(hasChildren(undefined)).toBe(false)
  })

  describe('props.children', () => {
    test('returns false for empty array', () => {
      expect(hasChildren({ children: [] })).toBe(false)
    })
    test('returns true for array with length >= 1', () => {
      expect(hasChildren({ children: [0, 1] })).toBe(true)
    })
    test('returns false for null', () => {
      expect(hasChildren({ children: null })).toBe(false)
    })
    test('returns false for void 0', () => {
      expect(hasChildren({ children: void 0 })).toBe(false) // eslint-disable-line no-void
    })
    test('returns false for NaN', () => {
      expect(hasChildren({ children: NaN })).toBe(false)
    })
    test('returns false for undefined', () => {
      expect(hasChildren({ children: undefined })).toBe(false)
    })
  })
})

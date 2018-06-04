import { isNil } from 'src/lib/childrenUtils'

describe('isNil', () => {
  test('should return true for empty array', () => {
    expect(isNil([])).toBe(true)
  })
  test('should return false for array with length >= 1', () => {
    expect(isNil([0, 1])).toBe(false)
  })
  test('should return true for null', () => {
    expect(isNil(null)).toBe(true)
  })
  test('should return true for void 0', () => {
    expect(isNil(void 0)).toBe(true) // eslint-disable-line no-void
  })
  test('should return false for NaN', () => {
    expect(isNil(NaN)).toBe(false)
  })
  test('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })
})

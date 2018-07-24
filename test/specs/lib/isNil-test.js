import { isNil } from 'src/lib/childrenUtils'

describe('isNil', () => {
  it('should return true for empty array', () => {
    expect(isNil([])).toBe(true)
  })
  it('should return false for array with length >= 1', () => {
    expect(isNil([0, 1])).toBe(false)
  })
  it('should return true for null', () => {
    expect(isNil(null)).toBe(true)
  })
  it('should return true for void 0', () => {
    expect(isNil(void 0)).toBe(true) // eslint-disable-line no-void
  })
  it('should return false for NaN', () => {
    expect(isNil(NaN)).toBe(false)
  })
  it('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })
})

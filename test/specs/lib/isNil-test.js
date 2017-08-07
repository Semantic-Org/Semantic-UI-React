import { isNil } from 'src/lib/childrenUtils'

describe('isNil', () => {
  it('should return true for empty array', () => {
    expect(isNil([])).to.equal(true)
  })
  it('should return false for array with length >= 1', () => {
    expect(isNil([0, 1])).to.equal(false)
  })
  it('should return true for null', () => {
    expect(isNil(null)).to.equal(true)
  })
  it('should return true for void 0', () => {
    expect(isNil(void 0)).to.equal(true) // eslint-disable-line no-void
  })
  it('should return false for NaN', () => {
    expect(isNil(NaN)).to.equal(false)
  })
  it('should return true for undefined', () => {
    expect(isNil(undefined)).to.equal(true)
  })
})

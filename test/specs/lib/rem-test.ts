import { rem } from 'src/lib'

describe('rem', () => {
  it('returns 0.625rem by default.', () => {
    expect(rem(1)).toEqual('0.625rem')
  })

  it('returns 1rem with base font size of 10px.', () => {
    rem.setHTMLFontSize('10px')
    expect(rem(1)).toEqual('1rem')
  })

  it('returns 0.714rem with a base font size of 14px.', () => {
    rem.setHTMLFontSize('14px')

    expect(rem(1)).toEqual('0.7143rem')
  })

  it('returns 1.25rem with a base font size of 8px.', () => {
    rem.setHTMLFontSize('8px')

    expect(rem(1)).toEqual('1.25rem')
  })

  it('returns 0rem when called without a value', () => {
    expect(rem()).toEqual('0rem')
  })

  it('returns 0rem when called with 0', () => {
    expect(rem(0)).toEqual('0rem')
  })

  it('throws when htmlFontSize is in rems', () => {
    rem.setHTMLFontSize('8rem')

    expect(() => rem(0)).toThrowError()
  })

  it('throws when rem value is provided as a string', () => {
    expect(() => rem('10' as any)).toThrowError()
  })

  it('throws when htmlFontSize is <= 0px', () => {
    rem.setHTMLFontSize('0px')
    expect(() => rem()).toThrowError()
    expect(() => rem(0)).toThrowError()
    expect(() => rem(1)).toThrowError()

    rem.setHTMLFontSize('-1px')
    expect(() => rem()).toThrowError()
    expect(() => rem(0)).toThrowError()
    expect(() => rem(1)).toThrowError()
  })

  it('throws when htmlFontSize is not a string', () => {
    rem.setHTMLFontSize(10)

    expect(() => rem(10)).toThrowError()
  })
})

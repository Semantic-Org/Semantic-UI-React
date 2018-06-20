import { rem } from 'src/lib'
import * as TODO_FIX_ME from 'src/themes/teams/siteVariables'

const siteVariables: any = TODO_FIX_ME

describe('rem', () => {
  it('should return 1rem with base font size of 10px.', () => {
    siteVariables.htmlFontSize = '10px'

    expect(rem(1)).toEqual('1rem')
  })

  it('should return 0.714rem with a base font size of 14px.', () => {
    siteVariables.htmlFontSize = '14px'

    expect(rem(1)).toEqual('0.7143rem')
  })

  it('should return 1.25rem with a base font size of 8px.', () => {
    siteVariables.htmlFontSize = '8px'

    expect(rem(1)).toEqual('1.25rem')
  })

  it('should return 0rem value when rem is called without a value', () => {
    expect(rem()).toEqual('0rem')
  })

  it('should return 0rem value when value passed in is 0', () => {
    expect(rem(0)).toEqual('0rem')
  })

  it('should throw error when htmlFontSize is in rems', () => {
    siteVariables.htmlFontSize = '8rem'

    expect(() => {
      rem(0)
    }).toThrowError()
  })

  it('should throw error when rem value is provided as a string', () => {
    siteVariables.htmlFontSize = '8px'
    const invalidValue = '10' as any

    expect(() => {
      rem(invalidValue)
    }).toThrowError()
  })

  it('should throw error when htmlFontSize is <= 0px', () => {
    siteVariables.htmlFontSize = '0px'

    expect(() => {
      rem(10)
    }).toThrowError()
  })

  it('should throw error when htmlFontSize is not a string', () => {
    siteVariables.htmlFontSize = 10

    expect(() => {
      rem(10)
    }).toThrowError()
  })
})

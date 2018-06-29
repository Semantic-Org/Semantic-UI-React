import { fontSizeUtility } from 'src/lib'

describe('fontSizeUtility', () => {
  describe('pxToRem', () => {
    it('returns 1rem for 10px with a default HTML font size of 10px.', () => {
      expect(fontSizeUtility.pxToRem(10)).toEqual('1rem')
    })

    it('returns 1rem with base font size of 10px.', () => {
      fontSizeUtility.setHTMLFontSize('10px')
      expect(fontSizeUtility.pxToRem(10)).toEqual('1rem')
    })

    it('returns 0.714rem with a base font size of 14px.', () => {
      fontSizeUtility.setHTMLFontSize('14px')

      expect(fontSizeUtility.pxToRem(10)).toEqual('0.7143rem')
    })

    it('returns 1.25rem with a base font size of 8px.', () => {
      fontSizeUtility.setHTMLFontSize('8px')

      expect(fontSizeUtility.pxToRem(10)).toEqual('1.25rem')
    })

    it('returns 0rem when pxToRem is called without a value', () => {
      expect(fontSizeUtility.pxToRem()).toEqual('0rem')
    })

    it('returns 0rem when pxToRem is called with 0', () => {
      expect(fontSizeUtility.pxToRem(0)).toEqual('0rem')
    })

    it('throws when htmlFontSize is in rems', () => {
      fontSizeUtility.setHTMLFontSize('8rem')

      expect(() => fontSizeUtility.pxToRem(0)).toThrowError()
    })
  })

  describe('setHTMLFontSize', () => {
    it('throws when htmlFontSize is <= 0px', () => {
      fontSizeUtility.setHTMLFontSize('0px')
      expect(() => fontSizeUtility.pxToRem()).toThrowError()
      expect(() => fontSizeUtility.pxToRem(0)).toThrowError()
      expect(() => fontSizeUtility.pxToRem(10)).toThrowError()

      fontSizeUtility.setHTMLFontSize('-1px')
      expect(() => fontSizeUtility.pxToRem()).toThrowError()
      expect(() => fontSizeUtility.pxToRem(0)).toThrowError()
      expect(() => fontSizeUtility.pxToRem(10)).toThrowError()
    })
  })
})

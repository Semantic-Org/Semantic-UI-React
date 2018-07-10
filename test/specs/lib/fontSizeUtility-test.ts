import { pxToRem, setHTMLFontSize } from 'src/lib'

describe('fontSizeUtility', () => {
  describe('pxToRem', () => {
    it('returns 1rem for 10px with a default HTML font size of 10px.', () => {
      expect(pxToRem(10)).toEqual('1rem')
    })

    it('should throw error when called with a negative number.', () => {
      expect(() => pxToRem(-1)).toThrowError()
    })

    it('returns 1rem with base font size of 10px.', () => {
      setHTMLFontSize('10px')
      expect(pxToRem(10)).toEqual('1rem')
    })

    it('returns 0.714rem with a base font size of 14px.', () => {
      setHTMLFontSize('14px')

      expect(pxToRem(10)).toEqual('0.7143rem')
    })

    it('returns 1.25rem with a base font size of 8px.', () => {
      setHTMLFontSize('8px')

      expect(pxToRem(10)).toEqual('1.25rem')
    })

    it('returns 0rem when pxToRem is called without a value.', () => {
      expect(pxToRem()).toEqual('0rem')
    })

    it('returns 0rem when pxToRem is called with 0.', () => {
      expect(pxToRem(0)).toEqual('0rem')
    })
  })

  describe('setHTMLFontSize', () => {
    it('throws when htmlFontSize is in rems.', () => {
      expect(() => setHTMLFontSize('8rem')).toThrowError()
    })

    it('throws when htmlFontSize is <= 0px.', () => {
      expect(() => setHTMLFontSize('0px')).toThrowError()

      expect(() => setHTMLFontSize('-1px')).toThrowError()
    })
  })
})

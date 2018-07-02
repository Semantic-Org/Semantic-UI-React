import normalizeTarget from 'src/lib/eventStack/normalizeTarget'

describe('normalizeTarget', () => {
  describe('document', () => {
    it('returns `document` when it passed as string', () => {
      expect(normalizeTarget('document')).toBe(document)
    })

    it('returns `document` when `false` passed', () => {
      expect(normalizeTarget(false)).toBe(document)
    })

    it('returns `document` when it passed', () => {
      expect(normalizeTarget(document)).toBe(document)
    })
  })

  describe('element', () => {
    it('returns `element` when it passed', () => {
      const element = document.createElement('div')

      expect(normalizeTarget(element)).toBe(element)
    })
  })

  describe('window', () => {
    it('returns `document` when it passed as string', () => {
      expect(normalizeTarget('window')).toBe(window)
    })

    it('returns document when it passed', () => {
      expect(normalizeTarget(window)).toBe(window)
    })
  })
})

import normalizeTarget from 'src/lib/eventStack/normalizeTarget'

describe('normalizeTarget', () => {
  describe('document', () => {
    test('returns `document` when it passed as string', () => {
      expect(normalizeTarget('document')).toBe(document)
    })

    test('returns `document` when `false` passed', () => {
      expect(normalizeTarget(false)).toBe(document)
    })

    test('returns `document` when it passed', () => {
      expect(normalizeTarget(document)).toBe(document)
    })
  })

  describe('element', () => {
    test('returns `element` when it passed', () => {
      const element = document.createElement('div')

      expect(normalizeTarget(element)).toBe(element)
    })
  })

  describe('window', () => {
    test('returns `document` when it passed as string', () => {
      expect(normalizeTarget('window')).toBe(window)
    })

    test('returns document when it passed', () => {
      expect(normalizeTarget(window)).toBe(window)
    })
  })
})

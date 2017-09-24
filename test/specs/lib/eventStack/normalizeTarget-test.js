import normalizeTarget from 'src/lib/eventStack/normalizeTarget'

describe('normalizeTarget', () => {
  describe('document', () => {
    it('returns `document` when it passed as string', () => {
      normalizeTarget('document')
        .should.equal(document)
    })

    it('returns `document` when `false` passed', () => {
      normalizeTarget(false)
        .should.equal(document)
    })

    it('returns `document` when it passed', () => {
      normalizeTarget(document)
        .should.equal(document)
    })
  })

  describe('element', () => {
    it('returns `element` when it passed', () => {
      const element = document.createElement('div')

      normalizeTarget(element)
        .should.equal(element)
    })
  })

  describe('window', () => {
    it('returns `document` when it passed as string', () => {
      normalizeTarget('window')
        .should.equal(window)
    })

    it('returns document when it passed', () => {
      normalizeTarget(window)
        .should.equal(window)
    })
  })
})

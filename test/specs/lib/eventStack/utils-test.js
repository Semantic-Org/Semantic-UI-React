import { normalizeHandlers, normalizeTarget } from 'src/lib/eventStack/utils'

describe('normalizeHandlers', () => {
  it('will create an array if it is not passed', () => {
    const handlers = normalizeHandlers('foo')

    handlers.should.be.an('array')
    handlers.should.contain('foo')
  })

  it('will return the same array', () => {
    const handlers = ['foo', 'bar']

    normalizeHandlers(handlers).should.equal(handlers)
  })
})

describe('normalizeTarget', () => {
  describe('document', () => {
    it('returns `document` when it passed as string', () => {
      normalizeTarget('document').should.equal(document)
    })

    it('returns `document` when `false` passed', () => {
      normalizeTarget(false).should.equal(document)
    })

    it('returns `document` when it passed', () => {
      normalizeTarget(document).should.equal(document)
    })
  })

  describe('element', () => {
    it('returns `element` when it passed', () => {
      const element = document.createElement('div')

      normalizeTarget(element).should.equal(element)
    })
  })

  describe('window', () => {
    it('returns `document` when it passed as string', () => {
      normalizeTarget('window').should.equal(window)
    })

    it('returns document when it passed', () => {
      normalizeTarget(window).should.equal(window)
    })
  })
})

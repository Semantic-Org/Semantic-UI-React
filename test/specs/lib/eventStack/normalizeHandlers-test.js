import normalizeHandlers from 'src/lib/eventStack/normalizeHandlers'

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
